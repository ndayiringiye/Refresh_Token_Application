import { handleLOgin } from "../services/loginService.js";
import { registerService } from "../services/signup.js";

export const loginRoute = async (req, res) => {
    try {
        const user = await handleLOgin(req, res);
        res.status(202).json({ msg: "user login successfuly", data: user });
    } catch (error) {
        res.status(500).json({ msg: "user login falied" });
    }
};


export const createUser = async (req, res) => {
    try {
        const user = await registerService(req, res);
        res.status(202).json({ msg: "user created successfully", data: user });
    } catch (error) {
        res.status(500).json({ msg: "user creation falied" });
    }
}