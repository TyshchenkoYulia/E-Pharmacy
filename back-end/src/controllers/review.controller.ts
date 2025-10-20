import { Request, Response, NextFunction } from "express";
import { ReviewService } from "../services/review.service";
import { CreateReviewDto } from "../types/dto/request/ReviewRequestDto";

export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  getAllReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviews = await this.reviewService.getAllReviews();
      res.status(200).json(reviews);
    } catch (error) {
      next(error);
    }
  };

  createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto: CreateReviewDto = req.body;
      const review = await this.reviewService.createReview(dto);
      res.status(201).json(review);
    } catch (error) {
      next(error);
    }
  };
}
