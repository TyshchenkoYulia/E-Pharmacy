import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";

export class UserController {
  constructor(private userService: UserService) {}

  getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usersDto = await this.userService.getAllUsers();
      res.status(200).json(usersDto);
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Невірний ID користувача" });
      }

      const user = await this.userService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
