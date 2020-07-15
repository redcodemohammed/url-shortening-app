import { Router } from "express";
import homeRouter from "./home";

export const router = Router();

router.use("/api", homeRouter);

export default router;
