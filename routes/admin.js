const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middleware/auth.js");

// Admin-only route
router.get("/dashboard", isAdmin, (req, res) => {
  res.send(`Admin dashboard for ${req.session.user.name}`);
});

module.exports = router;
