const Customer = require("../model/user-model");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await Customer.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newCustomer = await Customer.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      customer: {
        id: newCustomer._id,
        email: newCustomer.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { register };