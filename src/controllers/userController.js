import { handleLOgin } from "../services/loginService.js";
import { registerService } from "../services/signup.js";

export const createUser = async (req, res) => {
    try {
        const user = await registerService(req.body); 
        res.status(201).json({ msg: "User created successfully", data: user });
    } catch (error) {
        res.status(500).json({ msg: "User creation failed", error: error.message });
    }
};

export const loginRoute = async (req, res) => {
    try {
        const user = await handleLOgin(req.body);
        res.status(202).json({ msg: "user login successfuly", data: user });
    } catch (error) {
        res.status(500).json({ msg: "user login falied" });
    }
};



