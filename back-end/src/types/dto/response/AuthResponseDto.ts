export interface RegisterResponseDto {
  message: string;
}

export interface LoginResponseDto {
  token: string;
  name: string;
  userId: number;
  message: string;
}

export interface LogoutResponseDto {
  message: string;
}

export interface DeleteUserResponseDto {
  message: string;
}
