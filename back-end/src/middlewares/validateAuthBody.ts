import { Request, Response, NextFunction } from "express";
import { RegisterUserDto } from "../types/dto/request/AuthRequestDto";

export const validateRegisterBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, phone, password } = req.body as RegisterUserDto;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({
      message: "Усі поля (name, email, phone, password) обов’язкові.",
    });
  }
  next();
};

export const validateLoginBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email і password обов’язкові." });
  }
  next();
};
