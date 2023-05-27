import React, { useState, useEffect } from "react";
import { db } from "../../components/firebase";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import "./RestaurantOwnerProfilePage.css";
import { motion } from "framer-motion";
import image from "./RestaurantOwnerProfileImage/profile.jpg";
import Table from "react-bootstrap/Table";
import "reactjs-popup/dist/index.css";
import RestaurantOwnerRestaurantList from "./RestaurantOwnerRestaurantList"

const RestaurantOwnerProfilePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <section className="profile-container">
        <img src={image} className="profile-img" alt="user" />
        <section className="profile-details">
          <h1 className="profile-name">
            <b>Asli</b>
          </h1>
          <p className="profile-loc">
            <b>Username: aslikaraman</b>
          </p>
          <p className="profile-loc">
            <b>Full name: Asli Karaman</b>
          </p>
          <p className="profile-loc">
            <b>Email address: asli.karaman@ug.bilkent.edu.tr</b>
          </p>
          <p className="profile-loc">
            <b>Phone number: 1234567890</b>
          </p>
          <button className="profile-btn">Edit</button>
        </section>
      </section>
      <RestaurantOwnerRestaurantList />
    </div>
  );
};

export default RestaurantOwnerProfilePage;
