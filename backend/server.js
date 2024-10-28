import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(cookieParser());
app.use(express.json());
import searchRoute from "./routes/search.route.js";
import eventRoutes from "./routes/event.route.js";

app.use("/api/search", searchRoute);

app.use(async(req,res,next)=>{
    await new Promise(resolve=> setTimeout(resolve,3000));
    next();
})
app.use("/api/event", eventRoutes);

app.listen(5001, () => {
    connectDB();
    console.log("Server is running on port 5001");
});