import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db.js";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
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


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}


app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port", PORT);
});