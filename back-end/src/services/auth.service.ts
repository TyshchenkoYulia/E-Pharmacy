import prisma from "../config/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  DeleteUserDto,
  LoginUserDto,
  RegisterUserDto,
} from "../types/dto/request/AuthRequestDto";
import {
  DeleteUserResponseDto,
  LoginResponseDto,
  LogoutResponseDto,
  RegisterResponseDto,
} from "../types/dto/response/AuthResponseDto";
import { ApiError } from "../utils/ApiError";

export class AuthService {
  async register(data: RegisterUserDto): Promise<RegisterResponseDto> {
    const { email, name, phone, password } = data;

    // Перевірка, чи користувач вже існує
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser)
      throw ApiError.conflict("A user with this email already exists");

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

    return { message: "User registered successfully." };
  }

  async login(data: LoginUserDto): Promise<LoginResponseDto> {
    const { email, password } = data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw ApiError.unauthorized("Invalid credentials");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw ApiError.unauthorized("Invalid credentials");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "10m" }
    );

    return {
      message: "Login successful",
      name: user.name,
      userId: user.id,
      token,
    };
  }

  async logout(): Promise<LogoutResponseDto> {
    return { message: "Logout successful." };
  }

  async deleteUser(data: DeleteUserDto): Promise<DeleteUserResponseDto> {
    const { userId } = data;
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!existingUser) throw ApiError.notFound("User not found");

    await prisma.user.delete({ where: { id: userId } });

    return { message: "User deleted successfully." };
  }
}
