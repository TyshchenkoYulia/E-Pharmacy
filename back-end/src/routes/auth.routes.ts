import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import {
  validateLoginBody,
  validateLogoutBody,
  validateRegisterBody,
} from "../middlewares/validateAuthBody";

const router = Router();
const authController = new AuthController(new AuthService());

router.post("/register", validateRegisterBody, authController.register);
router.post("/login", validateLoginBody, authController.login);
router.post("/logout", validateLogoutBody, authController.logout);

export default router;
