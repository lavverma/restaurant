import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
const url = import.meta.env.VITE_SERVER_URL;

const RestaurantList = ({ restaurantId }) => {
  const [restaurant, setRestaurant] = useState([]);
  const restaurantDetails = async (restaurantId) => {
    try {
      const restaurantData = await axios.get(
        `${url}/getRestaurantById/${restaurantId}`
      );
      setRestaurant(restaurantData.data.data);
      const reviewData = await axios.get(`${url}/getReviews/${restaurantId}`);
      setReviewList(reviewData.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  useEffect(() => {
    restaurantDetails(restaurantId);
  }, []);

  return (
    <div className=" mt-2 ">
      {restaurant.map((i) => (
        <div key={i._id}>
          <h4>
            <i>{i.name}</i>
          </h4>
          <i className=" ps-2" style={{ fontSize: "15px" }}>
            {" "}
            {i.address}
          </i>
          <p className=" p-2" style={{ fontSize: "18px" }}>
            <b>Description:-</b> <br />
            {i.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
