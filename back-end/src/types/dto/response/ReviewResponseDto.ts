export interface ReviewItemDto {
  id: number;
  name: string;
  photo: string;
  testimonial: string;
}

export interface ReviewListResponseDto {
  data: ReviewItemDto[];
}
