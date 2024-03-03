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
    required: [true, "please select your course"],
  },
  branch: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Branch",
    },
  ],
  rollnumber: {
    type: Number,
    required: [true, "please enter your roll number"],
    unique: true,
    minlength: [7, "minimum length should be seven"],
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
  approved:{
    type:Boolean,
    default:false
  }
});

const branch= mongoose.Schema({
  BranchName:{
    type:String,

  }
})

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
const Branch=mongoose.model("Branch",branch);
module.exports = {
  users,
  Branch
};
