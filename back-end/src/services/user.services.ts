import prisma from "../config/prismaClient";
import { User } from "../types/dto/request/UserRequestDto";
import {
  UserInfoResponseDto,
  UserListItemDto,
  UserListResponseDto,
} from "../types/dto/response/UserResponseDto";

export class UserService {
  //   async getUserInfo(userId: number): Promise<UserInfoResponseDto> {
  //     const user = await prisma.user.findUnique({
  //       where: { id: userId },
  //       select: {
  //         id: true,
  //         name: true,
  //         email: true,
  //       },
  //     });
  //     if (!user) {
  //       throw new Error("Користувач не знайдений");
  //     }
  //     return user;
  //   }
  // async getAllUsers(): Promise<UserListResponseDto> {
  //   const users = await prisma.user.findMany({
  //     select: {
  //       id: true,
  //       name: true,
  //       email: true,
  //       phone: true,
  //       registerDate: true,
  //     },
  //     orderBy: { id: "asc" },
  //   });
  //   const data: UserListItemDto[] = users.map((user: User) => ({
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //     phone: user.phone,
  //     registerDate: user.registerDate.toISOString(),
  //   }));
  //   return { data };
  // }
}
