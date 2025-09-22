import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.services";

export class UserController {
  constructor(private userService: UserService) {}

  //   userInfo = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const userId = req.user?.id;
  //       if (!userId) {
  //         return next(new Error("Користувач не авторизований"));
  //       }

  //       const data = await this.userService.getUserInfo(userId);
  //       res.status(200).json({ data });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  // getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const data = await this.userService.getAllUsers();
  //     res.status(200).json(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
