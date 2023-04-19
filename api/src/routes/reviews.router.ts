import { Router } from "express";
import { readReviews, createReview, updateReview, deleteReview } from "../controllers/reviews.controllers";
import { createReviewValidator, updateReviewValidator } from "../middlewares/validations.middlewares";

const router = Router();

//readReviews
router.get("/", readReviews);

//createReview
router.post("/createReview", createReviewValidator, createReview);

//updateReview
router.put("/:id", updateReviewValidator, updateReview);

//deleteReview
router.delete("/:id", deleteReview);

export default router;
