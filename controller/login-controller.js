const Customer = require("../model/user-model");
const bcrypt = require("bcryptjs");

// LOGIN
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const customer = await Customer.findOne({ email });
        if (!customer) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Send response
        res.json({
            message: "Login successful",
            customer: {
                id: customer._id,
                email: customer.email
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { login };
