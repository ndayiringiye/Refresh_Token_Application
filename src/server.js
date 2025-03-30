import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectdb } from "./config/db.js";
import { loginRoute } from "./controllers/userController.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", loginRoute)

const port = process.env.PORT || 4000;

app.listen(port, async () => {
    await connectdb();
    console.log(`server is running on port ${port}`);
});