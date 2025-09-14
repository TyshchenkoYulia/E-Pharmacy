import prisma from "../config/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  LoginUserDto,
  RegisterUserDto,
} from "../types/dto/request/AuthRequestDto";
import {
  LoginResponseDto,
  LogoutResponseDto,
  RegisterResponseDto,
} from "../types/dto/response/AuthResponseDto";

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

  async login(data: LoginUserDto): Promise<LoginResponseDto> {
    const { email, password } = data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Невірні облікові дані");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Невірні облікові дані");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    return {
      message: "Вхід виконано успішно",
      token,
    };
  }

  async logout(): Promise<LogoutResponseDto> {
    return { message: "Вихід виконано успішно." };
  }
}
