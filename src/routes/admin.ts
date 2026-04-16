import { mustBe } from "@/middlewares/auth.mw";
import { Router } from "express";

const adminRouter:Router= Router()
// Admin-only route
adminRouter.get("/dashboard", mustBe("admin"), (req, res) => {
  res.send(`Admin dashboard for you!`);
});

