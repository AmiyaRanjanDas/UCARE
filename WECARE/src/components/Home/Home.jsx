import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <>
      {/* =============================================================
        =======================section-1===============================
        =============================================================== */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <NavLink
              to={{
                pathname: "/Cartlane-Clone-Frontend/allproduct",
                search: "?cat=bracelet",
              }}
            >
              <img
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/RakshaBandhan/02/Desktop_1920x694.webp"
                className="d-block w-100"
                alt="..."
              />
            </NavLink>
          </div>
          <div className="carousel-item">
            <NavLink
              to={{
                pathname: "/Cartlane-Clone-Frontend/allproduct",
                search: "?cat=bangles",
              }}
            >
              <img
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/RBblog/Desktop_1920x694.webp"
                className="d-block w-100"
                alt="..."
              />
            </NavLink>
          </div>
          <div className="carousel-item">
            <NavLink
              to={{
                pathname: "/Cartlane-Clone-Frontend/allproduct",
                search: "?cat=bracelet",
              }}
            >
              <img
                src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/RakshaBandhan/02/Desktop_1920x694.webp"
                className="d-block w-100"
                alt="..."
              />
            </NavLink>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

        {/* ===========================================================
        =======================section-2===============================
        =============================================================== */}
        <About/>
    </>
  );
}

export default Home;
