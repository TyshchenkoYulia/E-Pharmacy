export interface RegisterUserDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface DeleteUserDto {
  userId: number;
}
