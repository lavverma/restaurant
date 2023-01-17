import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const url = import.meta.env.VITE_SERVER_URL;

const CurrReview = ({ restaurantId, changeHandler }) => {
  const [currRating, setCurrRating] = useState("");
  const [review, setReview] = useState("");

  const rating = (e) => {
    setCurrRating(e.target.name);
  };

  const currReview = (e) => {
    setReview(e.target.value);
  };

  const reviewData = {
    review: review,
    rating: parseInt(currRating),
  };

  const reviewSubmit = async (restaurantId) => {
    try {
      await axios.post(`${url}/createReview/${restaurantId}`, reviewData);
      setCurrRating("");
      setReview("");
      changeHandler();
      return toast.success(`Review successfully added`);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="m-5">
      <h3 className="m-2">Please submit your review</h3>
      <div class="btn-group m-2" style={{ maxWidth: "25px" }}>
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Rating
          <input className="w-25 ms-1 h-75 p-1 fw-bold" value={currRating} />
        </button>
        <ul class="dropdown-menu">
          <li>
            <a
              class="dropdown-item"
              name="1"
              value="1"
              onClick={(e) => rating(e)}
            >
              1
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              name="2"
              value="2"
              onClick={(e) => rating(e)}
            >
              2
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              name="3"
              value="3"
              onClick={(e) => rating(e)}
            >
              3
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              name="4"
              value="4"
              onClick={(e) => rating(e)}
            >
              4
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              name="5"
              value="5"
              onClick={(e) => rating(e)}
            >
              5
            </a>
          </li>
        </ul>
      </div>
      <textarea
        className="p-2 m-2 w-100"
        value={review}
        onChange={(e) => currReview(e)}
      ></textarea>
      <button
        type="button"
        className="btn btn-success btn-sm shadow-lg m-2"
        onClick={() => reviewSubmit(restaurantId)}
      >
        Submit
      </button>
    </div>
  );
};

export default CurrReview;
