const Kitchen = require("../models/Kitchen");

// @route   GET api/v1/kitchens
// @desc    Get all kitchens
// @access  Public
exports.getKitchens = async (req, res, next) => {
  try {
    let query = Kitchen.find();
    const limit = parseInt(req.query.limit, 10) || 25;
    const skip = parseInt(req.query.skip, 10) || 0;
    let total = await Kitchen.countDocuments();
    const totalPage = Math.ceil(total / limit);

    query = query.sort({ createdAt: -1 }).skip(skip).limit(limit);
    const kitchens = await query;
    return res.status(200).json({
      success: true,
      count: kitchens.length,
      total,
      data: kitchens,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @route   POST api/v1/kitchens
// @desc    Create a kitchen
// @access  Private
exports.createKitchen = async (req, res, next) => {
  try {
    const kitchen = await Kitchen.create(req.body);
    return res.status(201).json({
      success: true,
      data: kitchen,
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

// @route   GET api/v1/kitchens/:id
// @desc    Get a kitchen
// @access  Public
exports.getKitchen = async (req, res, next) => {
  try {
    const kitchen = await Kitchen.findById(req.params.id);
    if (!kitchen) {
      return res.status(404).json({
        success: false,
        error: "No kitchen found",
      });
    }
    return res.status(200).json({
      success: true,
      data: kitchen,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @route   PUT api/v1/kitchens/:id
// @desc    Update a kitchen
// @access  Private
exports.updateKitchen = async (req, res, next) => {
  try {
    const kitchen = await Kitchen.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!kitchen) {
      return res.status(404).json({
        success: false,
        error: "No kitchen found",
      });
    }
    return res.status(200).json({
      success: true,
      data: kitchen,
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

// @route   DELETE api/v1/kitchens/:id
// @desc    Delete a kitchen
// @access  Private
exports.deleteKitchen = async (req, res, next) => {
  try {
    const kitchen = await Kitchen.findById(req.params.id);
    if (!kitchen) {
      return res.status(404).json({
        success: false,
        error: "No kitchen found",
      });
    }
    await kitchen.remove();
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
