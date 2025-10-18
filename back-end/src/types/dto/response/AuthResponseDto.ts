export interface RegisterResponseDto {
  message: string;
}

export interface LoginResponseDto {
  token: string;
  name: string;
  message: string;
}

export interface LogoutResponseDto {
  message: string;
}
