import express from "express";
import { handleLOgin } from "../services/loginService.js";
import { generateTokenService } from "../services/refreshtoken.js";
import { createUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", handleLOgin);
router.post("/refresh", generateTokenService);
router.post("/signup", createUser)

export default router;