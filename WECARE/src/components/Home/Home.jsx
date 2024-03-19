import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import SwiperCard from "./SwiperCard";
import "./home.css";
import Clients from "./Clients";

function Home() {

  const arr = [
    {
      id: 1,
      name: "Exclusive Evil Eye Gold CharmCharm",
      price: 10000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/T/UT01087-1Y0000_11_listfront.jpg",
      category: "gold",
    },
    {
      id: 2,
      name: "Geometric Gleam Diamond Stud Earrings",
      price: 15000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06395-1RP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 3,
      name: "Ornate Om Baby Gold Bangle",
      price: 20500,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/S/R/SR02496-WGP4HA_11_listfront.jpg",
      category: "bangle",
    },
    {
      id: 4,
      name: "Classic Leaves Diamond Pendant",
      price: 55000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP03780-YGP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 5,
      name: "Diamond Pendants 18 Karat Yellow Gold",
      price: 13250,
      image:
        "https://cdn.caratlane.com/media/catalog/product/J/P/JP03871-YGP900_1_lar.jpg",
      category: "silver",
    },
    {
      id: 6,
      name: "Geometric Gleam Diamond Stud Earrings",
      price: 15000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07311-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 7,
      name: "Diamond,Gemstone Rings 14 Karat Yellow Gold",
      price: 20500,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07508-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 8,
      name: "Diamond,Gemstone Necklaces 14 Karat Yellow Gold",
      price: 55000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL04408-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 9,
      name: "Diamond Necklaces 14 Karat Rose Gold Doris",
      price: 13250,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL03574-1RP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 10,
      name: "Swirl Pearl Drop Earrings",
      price: 15000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE07813-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 11,
      name: "Meghraa Pearl Drop Earrings",
      price: 20500,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE07604-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 12,
      name: "Glorious Orb Diamond Bangle",
      price: 55000,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/B/JB01116-WYP900_11_listfront.jpg",
      category: "silver",
    },
    {
      id: 13,
      name: "Swaying Pearl Bangle ",
      price: 13250,
      image:
        "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/B/JB01204-1YP6P0_11_listfront.jpg",
      category: "silver",
    },
  ];

  const breakpoints = {
    0: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 4
    }
  };


  return (
    <>
      {/* =============================================================
        =======================section-1============================*/}
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
        =======================section-2===========================*/}
      <div className="p-2">
      <Swiper
      modules={[Navigation, Scrollbar, Autoplay]}
      spaceBetween={0}
      autoplay={{ delay: 3000 }}
      navigation
      breakpoints={breakpoints}
    >
          {arr.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <SwiperCard  {...e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

        {/* ===========================================================
        =======================section-3=========================== */}
        <Clients/>
    </>
  );
}

export default Home;
