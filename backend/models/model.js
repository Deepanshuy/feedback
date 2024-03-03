const mongoose = require("mongoose");
const { isEmail } = require("validator");
// const nodemailer = require("nodemailer");

// login signup schema:
const userschema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minlength: [6, "minmum length should be six"],
  },
  accountType: {
    type: String,
    enum: ["Admin", "Student"],
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

// registration schema:
const registerationSchema = new mongoose.Schema({
  yourname: {
    type: String,
    required: [true, "please enter your name"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "please enter valid email"],
  },
  course: {
    type: String,
    required: [true, "please select your course"],
  },
  branch: {
    type: String,
    required: [true, "please select your branch"],
  },
  rollnumber: {
    type: Number,
    required: [true, "please enter your roll number"],
    unique: true,
    minlength: [7, "minimum length should be seven"],
  },
});

// send email function

// registerationSchema.post("save", async (doc) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       auth: {
//         user: "bboysmoothy@gmail.com",
//         pass: "ceterzgiepqnjqda",
//       },
//     });
//     const msg = await transporter.sendMail({
//       from: "deepanshu",
//       to: doc.email,
//       subject: "Heyyy",
//       html: "<p>This is test email</p>",
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });

const users = mongoose.model("users", userschema);
const registration = mongoose.model("registration", registerationSchema);
module.exports = {
  users,
  registration,
};
