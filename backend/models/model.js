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
  name: {
    type: String,
    required: [true, "please enter your name"],
    lowercase: true,
  },

  course: {
    type: String,
  },
  sem: {
    type: String,
    enum: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"],
  },

  branch: {
    type: String,
  },

  rollNumber: {
    type: Number,
    required: true,
    unique: true,
    minlength: 7,
  },
  accountType: {
    type: String,
    enum: ["Admin", "Student"],
    default: "Student",
  },
  token: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
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

module.exports = {
  users,
};
