const express = require("express");
const controller = require("../controller/controller");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.get("/getPendingStudents", controller.getPendingStudents);
router.post("/registration", auth.auth, auth.isStudent);

router.put("/approve", controller.approveRequest);
router.delete("/delete", controller.deleteRequest);
router.post("/createFeedback", controller.createFeedback);
router.post("/getFeedback", controller.getFeedback);
router.get("/getTeachers", controller.getTeachers);
router.post("/createScore", controller.createScores);

module.exports = router;
