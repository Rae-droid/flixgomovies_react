import express from "express";
import { requireAuth } from "../middleware/auth.js";

import { getUserData } from "../controllers/userDataController.js";

const userDataRoute = express.Router();

userDataRoute.get("/data", requireAuth, getUserData);

export default userDataRoute;
