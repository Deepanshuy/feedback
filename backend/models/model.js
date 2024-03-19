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
    default: "Admin",
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

const feedBackSchema = new mongoose.Schema({
  teacher: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
  },
  course: {
    type: String,
  },
  sem: {
    type: String,
  },
  marks: {
    type: Number,
  },
  score: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Score",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  score: {
    type: String,
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
const feedback = mongoose.model("feedback", feedBackSchema);
const scores = mongoose.model("Score", ScoreSchema);
module.exports = {
  users,
  feedback,
  scores,
};
