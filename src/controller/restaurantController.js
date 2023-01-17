const mongoose = require("mongoose");
const restaurantModel = require("../models/restaurantModel");

//=================== Create a New restaurant data  =======================
async function createRestaurant(req, res) {
  try {
    const data = req.body;
    const { name, address, description } = data;
    if (!data) {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Details is required` });
    }

    // Name validation
    if (!name || typeof name !== "string") {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Name is required` });
    }

    //Address validation
    if (!address || typeof address !== "string") {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Address is required` });
    }

    //Description validation
    if (!description || typeof address !== "string") {
      return res
        .status(400)
        .send({ status: false, message: `Restaurant Description is required` });
    }

    const restaurant = await restaurantModel.create(data);
    return res.status(201).send({ status: true, data: restaurant });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}

//=========================== Get All Restaurant data ============================
async function getAllRestaurant(req, res) {
  try {
    const allRestaurant = await restaurantModel.find();
    return res.status(200).send({ status: true, data: allRestaurant });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}

//============================= Get Restaurant By Id ====================================
async function getRestaurantById(req, res) {
  try {
    const restaurantId = req.params.restaurantId;

    //Restaurant Id validation
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
    const restaurant = await restaurantModel.find({ _id: restaurantId });

    if (restaurant.length == 0) {
      return res
        .status(404)
        .send({ status: false, message: `No Restaurant found` });
    }

    return res.status(200).send({ status: true, data: restaurant });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
}

module.exports = { createRestaurant, getAllRestaurant, getRestaurantById };
