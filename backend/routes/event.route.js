import express from "express";
import { getAllEvents, getEventById } from "../controllers/event.controller.js";
const app = express.Router();

app.use(async(req,res,next)=>{
    await new Promise(resolve=> setTimeout(resolve,3000));
    next();
})

app.get("/", getAllEvents);
app.get("/:id", getEventById);

export default app;