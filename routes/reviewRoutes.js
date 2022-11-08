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

// !TODO
router.route("/").get(getReviews).post(createReview);

router
  .route("/:id")
  .get(getReview)
  .put(protect, updateReview)
  .delete(protect, deleteReview);

module.exports = router;
