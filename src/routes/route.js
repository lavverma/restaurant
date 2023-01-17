const express = require("express");
const {
  createRestaurant,
  getAllRestaurant,
  getRestaurantById,
} = require("../controller/restaurantController");
const {
  createReview,
  getAllReviews,
} = require("../controller/reviewController");
const router = express.Router();

// Restaurant
router.post("/createRestaurant", createRestaurant);
router.get("/getAllRestaurant", getAllRestaurant);
router.get("/getRestaurantById/:restaurantId", getRestaurantById);

//Review
router.post("/createReview/:restaurantId", createReview);
router.get("/getReviews/:restaurantId", getAllReviews);

module.exports = router;
