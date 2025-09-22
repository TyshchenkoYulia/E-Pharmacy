// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import { ApiError } from "../utils/ApiError";

// interface JwtPayload {
//   id: number;
//   email: string;
// }

// export const authenticate = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return next(ApiError.unauthorized("Токен відсутній"));
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const payload = jwt.verify(
//       token,
//       process.env.JWT_SECRET as string
//     ) as JwtPayload;
//     req.user = payload; // додаємо user в req
//     next();
//   } catch (err) {
//     return next(ApiError.unauthorized("Невірний або прострочений токен"));
//   }
// };
