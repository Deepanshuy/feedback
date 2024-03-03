const { users, registration } = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports.signup = async (req, res) => {
  try {
    const { email, password, accountType = "Student" } = req.body;
    if (!email || !password || !accountType) {
      return res.status(400).json({
        status: false,
        message: "Please fill all the fields",
      });
    }

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.json({
        status: false,
        message: "User already Registered",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const payload = {
      email,
      accountType,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3 * 60 * 60 * 24,
    });
    const User = await users.create({
      email,
      password: hashedPassword,
      accountType,
      token,
    });
    User.password = undefined;
    req.user = User;

    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 3 * 60 * 60 * 24 * 1000,
      })
      .json({
        status: true,
        data: User,
      });
  } catch (err) {
    console.log(err);
    return res.json({
      status: false,
      message: "Something went wrong",
    });
  }
};
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Please fill all the fields",
    });
  }
  const User = await users.findOne({ email: email });
  if (!User) {
    return res.json({
      status: false,
      message: "User Not Found",
    });
  }

  if (!(await bcrypt.compare(password, User.password))) {
    return res.json({
      status: false,
      message: "Password is incorrect",
    });
  }

  User.password = undefined;
  return res.json({
    status: true,
    message: User,
  });
};

module.exports.get_registration = async (req, res) => {
  try {
    const { yourname, email, course, branch, rollnumber } = req.body;
    if (!yourname || !email || !course || !branch || !rollnumber) {
      res.status(404).json({
        status: false,
        message: "please fill all the fields",
      });
    }
    const data = registration.create({
      yourname,
      email,
      course,
      branch,
      rollnumber,
    });
    console.log(data);
    res.status(201).json({
      status: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: false,
      message: "something went wrong",
    });
  }
  await registration.create(body);
};