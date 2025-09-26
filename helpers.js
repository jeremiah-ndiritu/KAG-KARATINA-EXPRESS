const fs = require("fs");
const path = require("path");

const membersPath = path.join(__dirname, "store", "members.json");

// Helper to read JSON
const readMembers = () => {
  const data = fs.readFileSync(membersPath, "utf-8");
  return JSON.parse(data);
};

// Helper to write JSON
const writeMembers = (members) => {
  fs.writeFileSync(membersPath, JSON.stringify(members, null, 2));
};

module.exports = {
  readMembers,
  writeMembers,
};
