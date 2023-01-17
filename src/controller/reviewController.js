const mongoose = require("mongoose");
const restaurantModel = require("../models/restaurantModel");
const reviewModel = require("../models/reviewModel");

//========================= Create A Review for restaurant ============================
async function createReview(req, res) {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(400)
        .send({ status: false, message: `Review Details is required` });
    }
    const restaurantId = req.params.restaurantId;

    // Restaurant Id validation
    if (!restaurantId) {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Id is required` });
    }
    if (!mongoose.isValidObjectId(restaurantId)) {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Id is not valid` });
    }

    const { review, rating } = data;

    // Review validation
    if (!review || typeof review !== "string") {
      return res
        .status(400)
        .send({ status: false, message: `Review is required` });
    }

    // Rating validation
    if (!rating || typeof rating !== "number") {
      return res
        .status(400)
        .send({ status: false, message: `Rating is required` });
    }
    data.restaurantId = restaurantId;
    const reviewData = await reviewModel.create(data);
    await restaurantModel.findByIdAndUpdate(restaurantId, {
      $inc: { reviewCount: 1 },
    });
    return res.status(201).send({ status: true, data: reviewData });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}

//============================ Get All Reviews for a restaurant ==========================
async function getAllReviews(req, res) {
  try {
    const restaurantId = req.params.restaurantId;

    // Restaurant Id validation
    if (!restaurantId) {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Id is required` });
    }
    if (!mongoose.isValidObjectId(restaurantId)) {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Id is not valid` });
    }
    const AllReviews = await reviewModel
      .find({ restaurantId: restaurantId })
      .sort({ _id: -1 });

    if (AllReviews.length == 0) {
      return res
        .status(404)
        .send({ status: false, message: `No Review found` });
    }

    return res.status(200).send({ status: true, data: AllReviews });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}

module.exports = { createReview, getAllReviews };
