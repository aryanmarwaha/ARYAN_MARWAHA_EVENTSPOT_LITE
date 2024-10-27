import express from "express";
import { searchRecommendationController } from "../controllers/search.controller.js";

const router = express.Router();

router.get("/recommend", searchRecommendationController);


export default router;