import express from "express";
import { requireAuth } from "../middlewares/auth.js";

import { movieSchema } from "../controllers/movieController.js";

const movieRoute = express.Router();

movieRoute.get("/movie", requireAuth, movieSchema);

export default movieRoute;