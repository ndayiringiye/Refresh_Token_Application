import { handleLOgin } from "../services/loginService.js";

export const loginRoute = async (req, res) => {
    try {
        await handleLOgin(req, res);
        res.status(202).json({ msg: "user login successfuly" });
    } catch (error) {
        res.status(500).json({ msg: "user login falied" });
    }
}