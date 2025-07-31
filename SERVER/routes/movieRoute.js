import express from "express";
import { requireAuth } from "../middlewares/auth.js";

import { getMovie } from "../controllers/movieController.js";

const movieRoute = express.Router();

movieRoute.get("/get-movie", requireAuth, getMovie);

export default movieRoute;
