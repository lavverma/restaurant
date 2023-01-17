import { useState } from "react";
import { useParams } from "react-router-dom";
import CurrReview from "../components/currReview";
import RestaurantList from "../components/restaurantList";
import ReviewList from "../components/reviewsList";

const Restaurant = () => {
  const { restaurantId } = useParams();
  const [trigger, setTrigger] = useState(true);
  const change = () => {
    setTrigger(!trigger);
  };
  return (
    <div className="container-fluid">
      <RestaurantList restaurantId={restaurantId} />
      <CurrReview restaurantId={restaurantId} changeHandler={change} />
      <ReviewList restaurantId={restaurantId} changeHandler={change} />
    </div>
  );
};

export default Restaurant;
