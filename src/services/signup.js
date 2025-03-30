import bcrypt from "bcryptjs";
import User from "../models/userMode.js"; 

export const registerService = async (userData) => {
    const { username, email, password } = userData;

    try {
        const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error("User creation failed: " + error.message);
    }
};
