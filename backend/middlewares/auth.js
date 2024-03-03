const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.auth = async (req, res, next) => {
  try {
    const token = req.body.token || req.user.token || req.cookies.token;
    if (!token) {
      return res.json({
        message: "Token is missing",
      });
    }
    const payload = jwt.decode(token, process.env.JWT_SECTRET);
    if (!payload) {
      return res.json({
        message: "Token is invalid",
      });
    }
    req.user = payload
    next();
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong while validating token",
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    console.log(req);

    if (user.accountType != "Admin") {
      return res.json({
        message: "This is protected route for Admin Only",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Somthing went wrong",
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.accountType != "Student") {
      return res.json({
        message: "This is protected route for Student Only",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Somthing went wrong",
    });
  }
};
