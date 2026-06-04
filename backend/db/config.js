const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const register = require("./register");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/shopping")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new register({
      name,
      email,
      password,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/api/register", async (req, res) => {
  try {
    const registerData = await register.find();

    res.status(200).json({
      success: true,
      data: registerData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 2407;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});