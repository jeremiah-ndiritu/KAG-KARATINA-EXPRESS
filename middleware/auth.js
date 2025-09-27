// middleware/auth.js

// Checks if user is logged in (a member)
const isMember = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }
  return res.status(401).json({ error: "You must be logged in" });
};

// Checks if user is logged in + has admin role
const isAdmin = (req, res, next) => {
  if (req.session && req.session.user) {
    if (req.session.user.role === "admin") {
      return next();
    }
    return res.status(403).json({ error: "Admins only" });
  }
  return res.status(401).json({ error: "You must be logged in" });
};

module.exports = {
  isMember,
  isAdmin,
};
