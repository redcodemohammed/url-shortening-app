import { Router } from "express";
import urlRouter from "./urls";

export const router = Router();

router.use("/api", urlRouter);

export default router;
