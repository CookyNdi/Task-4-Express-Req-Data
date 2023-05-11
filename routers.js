import express from "express";
import { reqDataBody, reqDataQuery } from "./controllers.js";

const router = express.Router();

router.get("/", reqDataBody);
router.get("/biodata", reqDataQuery);

export default router;
