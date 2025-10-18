export interface RegisterFormData {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegisterRequestDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegisterResponseDto {
  message: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  message: string;
  name: string;
  token: string;
}
