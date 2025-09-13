import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { validateRegisterBody } from "../middlewares/validateAuthBody";

const router = Router();
const authController = new AuthController(new AuthService());

router.post("/register", validateRegisterBody, authController.register);
// router.post("/login");
// router.post("/logout");

export default router;
