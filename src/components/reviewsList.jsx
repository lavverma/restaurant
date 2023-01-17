import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const url = import.meta.env.VITE_SERVER_URL;

const ReviewList = ({ restaurantId, changeHandler }) => {
  const [reviewsList, setReviewList] = useState([]);
  const [show, setShow] = useState(false);
  const restaurantDetails = async (restaurantId) => {
    try {
      const reviewData = await axios.get(`${url}/getReviews/${restaurantId}`);
      if (reviewData.data.data.length > 0) {
        setShow(true);
        setReviewList(reviewData.data.data);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  useEffect(() => {
    restaurantDetails(restaurantId);
  }, [changeHandler]);

  return (
    <div className="card w-100 mb-4 shadow-lg">
      <div
        className="card-header fw-bolder"
        style={{ backgroundColor: "#A9C26D" }}
      >
        <b>Reviews</b>
      </div>
      {show ? (
        <ol
          className="list-group list-group-flush overflow-scroll "
          style={{ maxHeight: "250px" }}
        >
          {reviewsList.map((i, index) => (
            <li className="list-group-item ">
              <div key={i._id}>
                <h6>{`User ${index + 1}`}</h6>
                <i>{i.review}</i>
                <br />
                <h6 className="text-end" style={{ fontSize: "15px" }}>
                  <b>rating:- </b>
                  {i.rating}
                </h6>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <h2 className="p-5">No Reviews yet</h2>
      )}
    </div>
  );
};

export default ReviewList;
