export interface PharmacyListItemDto {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
}

export interface PharmacyListResponseDto {
  data: PharmacyListItemDto[];
}

export interface PharmacyInfoResponseDto extends PharmacyListItemDto {}
