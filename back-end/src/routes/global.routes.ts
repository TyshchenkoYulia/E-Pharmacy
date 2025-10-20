import express from "express";
import auth from "./auth.routes";
import user from "./user.routes";
import pharmacy from "./pharmacy.routes";
import review from "./review.routes";

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/pharmacies", pharmacy);
router.use("/reviews", review);

export default router;
