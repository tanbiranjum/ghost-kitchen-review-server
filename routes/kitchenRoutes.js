const {
  getKitchens,
  getKitchen,
  updateKitchen,
  deleteKitchen,
} = require("../controllers/kitchenController");

const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/").get(getKitchens);

router
  .route("/:id")
  .get(getKitchen)
  .put(protect, updateKitchen)
  .delete(protect, deleteKitchen);

module.exports = router;
