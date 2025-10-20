import { Router } from "express";
import { ReviewController } from "../controllers/review.controller";
import { ReviewService } from "../services/review.service";

const router = Router();
const reviewService = new ReviewService();
const reviewController = new ReviewController(reviewService);

router.get("/", reviewController.getAllReviews);
router.post("/", reviewController.createReview);

export default router;
