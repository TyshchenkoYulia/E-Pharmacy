import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.services";
// import { authenticate } from "../middlewares/authMiddleware";

const router = Router();
const userController = new UserController(new UserService());

// router.get("/user-info", authenticate, userController.userInfo);
// router.get("/users", userController.getAllUsers);

export default router;
