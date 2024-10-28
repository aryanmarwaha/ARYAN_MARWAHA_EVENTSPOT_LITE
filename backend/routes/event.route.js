import express from "express";
import { getAllEvents, getEventById } from "../controllers/event.controller.js";
const app = express.Router();

app.get("/", getAllEvents);
app.get("/:id", getEventById);

export default app;