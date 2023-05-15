import { Router } from "express";
import { captchaImg } from "../controllers/captcha-generator.js";

const router = Router()
router.post('/generate-img',  captchaImg);

export default router;