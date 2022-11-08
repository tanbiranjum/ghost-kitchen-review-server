const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
  getReviewsForKitchen,
} = require("../controllers/reviewController");

// !TODO
router.route("/").get(getReviews).post(protect, createReview);

router
  .route("/:id")
  .get(getReview)
  .put(protect, updateReview)
  .delete(protect, deleteReview);

router.route("/kitchens/:kitchenId").get(getReviewsForKitchen);

module.exports = router;
