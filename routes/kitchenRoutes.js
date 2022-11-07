const {
  getKitchens,
  getKitchen,
  updateKitchen,
  deleteKitchen,
  createKitchen
} = require("../controllers/kitchenController");

const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/").get(getKitchens).post(protect, createKitchen);

router
  .route("/:id")
  .get(getKitchen)
  .put(protect, updateKitchen)
  .delete(protect, deleteKitchen);

module.exports = router;
