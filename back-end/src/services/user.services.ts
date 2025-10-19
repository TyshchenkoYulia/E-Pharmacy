import prisma from "../config/prismaClient";
import { ApiError } from "../utils/ApiError";
import {
  UserInfoResponseDto,
  UserListItemDto,
  UserListResponseDto,
} from "../types/dto/response/UserResponseDto";
import { User } from "../types/dto/request/UserRequestDto";

export class UserService {
  async getAllUsers(): Promise<UserListResponseDto> {
    const users = await prisma.user.findMany({
      orderBy: { registerDate: "desc" },
    });

    if (!users || users.length === 0) {
      throw ApiError.notFound("Users not found");
    }

    const data: UserListItemDto[] = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      registerDate: user.registerDate.toISOString(),
    }));

    return { data };
  }

  async getUserById(userId: number): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw ApiError.notFound("User not found");

    const userDto: User = {
      ...user,
      spent: user.spent.toString(),
    };

    return userDto;
  }
}
