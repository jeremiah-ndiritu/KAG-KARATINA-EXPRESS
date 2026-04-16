import  {Router} from "express";
const authRouter: Router = Router();

import { writeMembers, readMembers} from "@utils/helpers";

// Signup
authRouter.post("/members/signup", (req, res) => {
  const newMember = req.body;

  // Assign an ID
  const members = readMembers();
  newMember.id = members.length ? members[members.length - 1].id + 1 : 1;
  newMember.joinedDate = new Date().toISOString().split("T")[0];
  newMember.status = "active";

  newMember.profileImage = "";
  newMember.adress = {};
  newMember.emergencyContact = {};
  newMember.notes = "A new member";
  newMember.permissions = {
    canPost: false,
    canAccessMembersOnly: true,
    canManageEvents: false,
  };

  members.push(newMember);
  writeMembers(members);

  res.json({ success: true, member: newMember });
});

// Get all members
authRouter.get("/members", (req, res) => {
  res.json(readMembers());
});

// Login (by email or phone)
authRouter.post("/members/login", (req, res) => {
  const { email, phoneNumber } = req.body;
  const members = readMembers();

  const member = members.find(
    (m) => m.email === email || m.phoneNumber === phoneNumber
  );

  if (member) {
    res.json({ success: true, member });
  } else {
    res.status(401).json({ success: false, message: "Member not found" });
  }
});

export default authRouter