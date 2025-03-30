import mongoose from "mongoose";


export const connectdb = async () =>{
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected successfuly ")
    } catch (error) {
        console.log("database connection falied: ", error)
    }
}