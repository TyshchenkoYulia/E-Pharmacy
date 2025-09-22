export interface UserInfoResponseDto {
  id: number;
  name: string;
  email: string;
}

export interface UserListItemDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  registerDate: string;
}

export interface UserListResponseDto {
  data: UserListItemDto[];
}
