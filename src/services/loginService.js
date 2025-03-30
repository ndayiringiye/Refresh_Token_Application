import bcrypt from "bcryptjs";
import User from "../models/userMode.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";


export const handleLOgin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true });
        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};