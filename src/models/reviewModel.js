const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const reviewSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: objectId,
      ref: "Restaurant",
      required: true,
      trim: true,
    },
    review: {
      type: String,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
