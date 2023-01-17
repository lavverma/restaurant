import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const url = import.meta.env.VITE_SERVER_URL;

const Admin = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);

  const restaurantData = async () => {
    try {
      const res = await axios.get(`${url}/getAllRestaurant`);
      setAllRestaurant(res.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    restaurantData();
  });

  return (
    <div className="container-fluid" style={{ backgroundColor: "#F5EEC2" }}>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <table class="table m-5 table-hover table-bordered table-striped">
          <thead className="table-dark">
            <tr className="">
              <th scope="col">#</th>
              <th scope="col">Restaurant Name</th>
              <th scope="col">Total Reviews</th>
            </tr>
          </thead>
          <tbody className="table-info">
            {allRestaurant.map((i, idx) => (
              <tr>
                <td scope="row">{idx + 1}.</td>
                <td>
                  <b>{i.name}</b>
                </td>
                <td>
                  <b>
                    <i>{i.reviewCount}</i>
                  </b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
