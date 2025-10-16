import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  constructor(private authService: AuthService) {}

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const message = await this.authService.register(userData);
      res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const result = await this.authService.login(data);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.logout();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Невірний ID користувача" });
      }

      const result = await this.authService.deleteUser(userId);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
