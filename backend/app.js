const express = require("express");
const mongoose = require("mongoose");
const anotherRoutes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// database connectivty:

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
// route to home page:
app.get("/home", (req, res) => {
  res.json({ home: "home" });
});
app.get("/", (req, res) => {
  res.redirect("home");
});

// on any route:
app.use(anotherRoutes);
// connected to localhost:
app.listen(4000, "127.0.0.1", () => {
  console.log("connected to localhost");
});
