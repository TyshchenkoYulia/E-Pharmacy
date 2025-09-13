import prisma from "../config/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RegisterUserDto } from "../types/dto/request/AuthRequestDto";
import { RegisterResponseDto } from "../types/dto/response/AuthResponseDto";

export class AuthService {
  async register(data: RegisterUserDto): Promise<RegisterResponseDto> {
    const { email, name, phone, password } = data;

    // Перевірка, чи користувач вже існує
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      const error: any = new Error("Користувач вже зареєстрований.");
      error.status = 409;
      throw error;
    }

    // Хешування пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        spent: 0,
        registerDate: new Date(),
      },
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET || "secret", {
      expiresIn: "1d",
    });

    return { message: "Користувач успішно зареєстрований." };
  }
}
