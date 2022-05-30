import express from "express";
import { signup, signin, logout } from "../../controler/user.js";
import auth from "../../middleware/auth.js";
import currUser from "../../middleware/currUser.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", auth, logout);
router.get("*", currUser);
export default router;
