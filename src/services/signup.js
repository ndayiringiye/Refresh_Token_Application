import { matchRoutes } from "react-router";
import User from "../models/userMode.js"
import bcrypt from "bcryptjs";

export const registerService = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, user.password)
        const user = await User({
            username,
            email,
            password: hashedPassword
        });
        const newUser = await user.save();
        res.status(200).json({ msg: "user created successfully" });
        return newUser;
    } catch (error) {
        res.status(500).json({ msg: "user creation fail" });
    }
}