import jwt from "jsonwebtoken";
import User from "../models/userMode.js";
import { generateAccessToken} from "../utils/jwt.js";

export const generateTokenService = async (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) return res.status(401).json({ message: "Unauthorized" });
  
    try {
      const user = await User.findOne({ refreshToken });
      if (!user) return res.status(403).json({ message: "Forbidden" });
  
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
  
        const newAccessToken = generateAccessToken(user);
        res.json({ accessToken: newAccessToken });
      });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }