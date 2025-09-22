import { Request, Response, NextFunction } from "express";
import { loginSchema, registerSchema } from "../validations/AuthSchema";

export const validateRegisterBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateLoginBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
