import express from "express";
import { getAllEventsController } from "../controllers/event.controller.js";
const app = express.Router();

app.get("/", getAllEventsController);


export default app;