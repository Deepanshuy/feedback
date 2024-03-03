const express = require("express");
const controller = require("../controller/controller");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.post(
  "/registration",
  auth.auth,
  auth.isStudent,
  controller.get_registration
);

module.exports = router;
