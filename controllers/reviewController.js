const Review = require("../models/Review");

// @route   GET api/v1/reviews
// @desc    Get all reviews
// @access  Public
exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @route   POST api/v1/reviews
// @desc    Create a review
// @access  Private
exports.createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    return res.status(201).json({
      success: true,
      data: review,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @route   GET api/v1/reviews/:id
// @desc    Get a review
// @access  Public
exports.getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({
        success: false,
        error: "No review found",
      });
    }
    return res.status(200).json({
      success: true,
      data: review,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @route   GET api/v1/reviews/kitchen/:kitchenId
// @desc    Get reviews for a kitchen
// @access  Public
exports.getReviewsForKitchen = async (req, res, next) => {
  try {
    const reviews = await Review.find({ kitchenId: req.params.kitchenId })
      .sort({ createdAt: -1 })
      .populate("kitchenId");
    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @route   GET api/v1/reviews/user/:uid
// @desc    Get reviews for a user
// @access  Private
exports.getReviewsForUser = async (req, res, next) => {
  try {
    const reviews = await Review.find({ uid: req.params.uid })
      .sort({
        createdAt: -1,
      })
      .populate("kitchenId");
    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @route   PUT api/v1/reviews/:id
// @desc    Update a review
// @access  Private
exports.updateReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!review) {
      return res.status(404).json({
        success: false,
        error: "No review found",
      });
    }
    return res.status(200).json({
      success: true,
      data: review,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @route   DELETE api/v1/reviews/:id
// @desc    Delete a review
// @access  Private
exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({
        success: false,
        error: "No review found",
      });
    }
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
