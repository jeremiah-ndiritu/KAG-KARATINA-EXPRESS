const express = require("express");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./auth/signUpandIn.js");

app.use("/api", authRoutes);

// Serve uploads statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const sermonsPath = path.join(__dirname, "store", "sermons.json");
const postsPath = path.join(__dirname, "store", "posts.json");
const membersPath = path.join(__dirname, "store", "members.json");

app.get("/", (req, res) => {
  res.send("<h1>App is running</h1>");
});
app.get("/api/sermons", (req, res) => {
  let contents = fs.readFileSync(sermonsPath);
  res.json(JSON.parse(contents));
});
app.get("/api/posts", (req, res) => {
  let buffer = fs.readFileSync(postsPath);
  res.json(JSON.parse(buffer));
});

const PORT = process.env.PORT || 5000 || 8080 || 8081;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
