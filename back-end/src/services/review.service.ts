import prisma from "../config/prismaClient";
import { ApiError } from "../utils/ApiError";
import { CreateReviewDto } from "../types/dto/request/ReviewRequestDto";
import {
  ReviewItemDto,
  ReviewListResponseDto,
} from "../types/dto/response/ReviewResponseDto";

export class ReviewService {
  async getAllReviews(): Promise<ReviewListResponseDto> {
    const reviews = await prisma.appReview.findMany({
      orderBy: { id: "desc" },
    });

    if (!reviews || reviews.length === 0) {
      throw ApiError.notFound("Reviews not found");
    }

    const data: ReviewItemDto[] = reviews.map((r) => ({
      id: r.id,
      name: r.name,
      photo: r.photo,
      testimonial: r.testimonial,
    }));

    return { data };
  }

  async createReview(dto: CreateReviewDto): Promise<ReviewItemDto> {
    const review = await prisma.appReview.create({
      data: {
        name: dto.name,
        photo: dto.photo,
        testimonial: dto.testimonial,
      },
    });

    return {
      id: review.id,
      name: review.name,
      photo: review.photo,
      testimonial: review.testimonial,
    };
  }
}
