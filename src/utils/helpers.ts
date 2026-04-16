import path from "path"; 
import fs from "fs"
import { Member } from "@/interfaces/member.interface";

const membersPath = path.join(__dirname, "store", "members.json");

// Helper to read JSON
export const readMembers = (): Member[] => {
  const data = fs.readFileSync(membersPath, "utf-8");
  return JSON.parse(data);
};

// Helper to write JSON
export const writeMembers = (members:Member[]) => {
  fs.writeFileSync(membersPath, JSON.stringify(members, null, 2));
};
