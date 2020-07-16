import { Router } from "express";
import shorten from "./shorten";
import getAll from "./getAll";

export const router = Router();

router.post("/shorten", shorten);

router.get("/all", getAll);

export default router;
