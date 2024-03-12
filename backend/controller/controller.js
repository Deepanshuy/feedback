const { users, registration, feedback, scores } = require("../models/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports.signup = async (req, res) => {
  try {
    const {
      email,
      password,
      confirmPassword,
      name,
      course,
      branch,
      rollNumber,
      sem,
    } = req.body;
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !name ||
      !course ||
      !branch ||
      !rollNumber ||
      !sem
    ) {
      return res.status(400).json({
        status: false,
        message: "Please fill all the fields",
      });
    }
    if (password != confirmPassword) {
      return res.status(403).json({
        status: false,
        message: "Password and confirm password do not match",
      });
    }

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.json({
        status: false,
        message: "User already Registered",
      });
    }
    const existingRollNumber = await users.findOne({ rollNumber: rollNumber });

    if (existingRollNumber) {
      return res.status(200).json({
        status: false,
        message: "Roll Number already Registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const payload = {
      email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 3 * 60 * 60 * 24,
    });
    const User = await users.create({
      email,
      password: hashedPassword,
      token,
      name,
      course,
      branch,
      rollNumber,
      sem,
    });
    User.password = undefined;

    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 3 * 60 * 60 * 24 * 1000,
      })
      .json({
        status: true,
        message: User,
        token,
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

module.exports.getPendingStudents = async (req, res) => {
  try {
    const students = await users.find({ approved: false });
    if (!students) {
      return res.status(404).json({
        status: false,
        message: "No Pending Students",
      });
    }
    students.map((student) => (student.password = undefined));
    return res.status(200).json({
      status: true,
      students,
    });
  } catch (err) {
    console.log(error);
    return res.status(400).json({
      status: false,
      message: "Error while fetching pending students",
    });
  }
};

module.exports.approveRequest = async (req, res) => {
  try {
    const { id } = req.body;
    const approved = await users.findByIdAndUpdate(
      { _id: id },
      {
        approved: true,
      },
      {
        new: true,
      }
    );
    const students = await users.find({ approved: false });
    students.map((student) => (student.password = undefined));
    return res.status(200).json({
      status: true,
      students,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: false,
      message: "Error while Approving Request",
    });
  }
};

module.exports.deleteRequest = async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await users.findByIdAndDelete({ _id: id });
    const students = await users.find({ approved: false });
    students.map((student) => (student.password = undefined));
    return res.status(200).json({
      status: true,
      students,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: false,
      message: "Error while Approving Request",
    });
  }
};

module.exports.createFeedback = async (req, res) => {
  try {
    const { teacher, subject, sem, branch, course } = req.body;
    const existingFeedback = await feedback.findOne({
      teacher: teacher,
      subject: subject,
      sem: sem,
      course: course,
      branch: branch,
    });

    // if (existingFeedback) {
    //   return res.status(200).json({
    //     status: true,
    //     message: "Feedback already exists",
    //   });
    // }
    const newFeedback = await feedback.create({
      teacher: teacher,
      subject: subject,
      sem: sem,
      course: course,
      branch: branch,
    });

    return res.status(200).json({
      status: true,
      newFeedback,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: false,
      message: "Error while Creating Feedback",
    });
  }
};

module.exports.createScores = async (req, res) => {
  try {
    const { teacher, subject, name, score } = req.body;

    const newScore = await scores.create({
      name: name,
      score: score,
    });

    const Feedback = await feedback
      .find({
        teacher: teacher,
        subject: subject,
      })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log(Feedback[0]);
    const updatedFeedback = await feedback.findByIdAndUpdate(
      {
        _id: Feedback[0]._id,
      },
      {
        $push: { score: newScore._id },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      status: true,
      updatedFeedback,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: false,
      message: "Error while Creating Feedback",
    });
  }
};

module.exports.getFeedback = async (req, res) => {
  try {
    const { teacher } = req.body;

    const teacherFeedback = await feedback
      .find({ teacher: teacher })
      .populate("score")
      .exec();
    if (!teacherFeedback) {
      return res.status(404).json({
        status: false,
        message: "Feedback not found",
      });
    }

    let totalScore;
    teacherFeedback.forEach((fb) => {
      totalScore = 0;
      fb.score.forEach((feed) => {
        if (feed.name !== "suggestion") {
          totalScore += parseInt(feed.score);
        }
      });
      fb.marks = totalScore;
    });

    return res.status(200).json({
      status: true,
      feedback: teacherFeedback,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: false,
      message: "Error while Fetching Feedback",
    });
  }
};

module.exports.getTeachers = async (req, res) => {
  try {
    const TeacherData = await feedback.find();
    const teachers = [...new Set(TeacherData.map((y) => y.teacher))];
    return res.status(200).json({
      status: true,
      teachers,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: false,
      message: "Error while Fetching Teachers",
    });
  }
};
