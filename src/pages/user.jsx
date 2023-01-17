import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const url = import.meta.env.VITE_SERVER_URL;

const User = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const getAllRestaurants = async () => {
    try {
      const res = await axios.get(`${url}/getAllRestaurant`);
      setRestaurantList(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  useEffect(() => {
    getAllRestaurants();
  }, []);

  return (
    <div className="container-fluid " style={{ backgroundColor: "#F5EEC2" }}>
      <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
        <div className="card mt-2 w-50 shadow-lg">
          <div
            className="card-header fw-bolder"
            style={{ backgroundColor: "#A9C26D" }}
          >
            <b>All Restaurants</b>
          </div>
          <ol
            className="list-group list-group-flush overflow-scroll "
            style={{ maxHeight: "400px" }}
          >
            {restaurantList.map((i) => (
              <Link
                className="text-decoration-none "
                to={`/restaurant/${i._id}`}
                key={i._id}
              >
                <li className="list-group-item ">
                  <p className="fw-bold">{i.name}</p>
                  <p style={{ fontSize: "15px" }}>
                    <b>Address:- </b>
                    {i.address}
                  </p>
                </li>
              </Link>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default User;
