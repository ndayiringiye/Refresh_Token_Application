import express from "express";
import { createUser, loginRoute } from "../controllers/userController.js";

const router = express.Router();
router.post("/signup", createUser);
router.post("/login", loginRoute);

export default router;
