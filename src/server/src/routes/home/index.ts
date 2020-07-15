import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => res.send("Hello World from dev!").end());

export default router;
