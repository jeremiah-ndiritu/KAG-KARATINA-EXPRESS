import { UserRole } from "@/interfaces/role.if";
import { NextFunction, Response, Request } from "express";

export const mustBe = (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => {
  if(!roles) return res.status(401).json({message: "Unauthorized"})
  next()
}