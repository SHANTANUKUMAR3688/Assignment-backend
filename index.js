const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config();
const database = require("./config/config")
// *****************routes****************

const loginRoute = require("./routes/auth-routes");

//const allowedOrigins = ['http://localhost:5173'];
//versel frontend url
 const allowedOrigins = 'https://assignment-frontend-neon-psi.vercel.app';
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true // only if you're using cookies or sessions,
};
app.use(cors(corsOptions));

//database connect
database.connect();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});
app.use(express.urlencoded({ extended: true }))


app.use("/api", loginRoute)

app.listen(4000, () => {
  console.log("server start on Port : 4000");
})