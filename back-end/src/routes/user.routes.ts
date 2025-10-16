import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.services";

const router = Router();
const userController = new UserController(new UserService());

router.get("/all", userController.getAllUsers);
router.get("/:id", userController.getUserById);

export default router;
