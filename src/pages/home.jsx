import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F5EEC2" }}>
      <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
        <Link to="/user/allRestaurant">
          <button
            type="button"
            className="btn btn-primary btn-lg m-4 shadow-lg p-3"
          >
            User
          </button>
        </Link>
        <Link to="/admin">
          <button
            type="button"
            className="btn btn-success btn-lg m-4 shadow-lg p-3"
          >
            Admin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
