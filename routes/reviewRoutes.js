const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

router.route("/").get(getReviews).post(protect, createReview);

router
  .route("/:id")
  .get(getReview)
  .put(protect, updateReview)
  .delete(protect, deleteReview);

module.exports = router;
