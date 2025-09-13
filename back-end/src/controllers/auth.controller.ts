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
}
