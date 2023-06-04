import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./FoodCont.css";
import FoodBox from "./FoodBox";
import imgFood from "../assets/food.jpg";
import PaymentSect from "./PaymentSect";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { useStateContext } from "../App";

function FoodCont() {
  const { user, foodList } = useStateContext();
  const token = Cookies.get("Food");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [openHours, setOpenHours] = useState("");
  const minDeliveryCost = 0;
  const numberOfOrders = 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/restaurant-owner/restaurant/create",
        {
          name,
          phone,
          district,
          openHours,
          cuisine,
          minDeliveryCost,
          numberOfOrders,
        },
        {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <>
      {user?.data?.role === "ROLE_RESTAURANT_OWNER" ? (
        <div className="container">
          <div className="left-side">
            <form
              action=""
              id="add-restaurant"
              method="post"
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, marginBottom: "25px", color: "#fff" }}
                >
                  Do you want to add new restaurant?
                </Typography>
              </Box>
              <TextField
                label="Name"
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Phone"
                size="small"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                label="Cuisine"
                size="small"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
              <TextField
                label="District"
                size="small"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
              <TextField
                label="Opening Hours"
                size="small"
                value={openHours}
                onChange={(e) => setOpenHours(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{
                  background: "#a55233",
                  marginTop: "30px",
                  textTransform: "none",
                  width: "120px",
                  "&:hover": {
                    backgroundColor: "#a55233",
                  },
                }}
                type="submit"
                value="add-restaurant"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="foodcontainer">
          <div className="left-side">
            <div className="cards">
              <Box
                className="varieties"
                gap={2}
                display="flex"
                mb={3}
                mt={3}
                ml={2}
              >
                <Autocomplete
                  multiple
                  size="small"
                  limitTags={2}
                  options={foodOptions}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Ingredients" />
                  )}
                  sx={{
                    width: "300px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff",
                    },
                    "& .MuiButtonBase-root": {
                      color: "#fff",
                    },
                    "& .MuiInputBase-root": {
                      color: "#fff",
                    },
                  }}
                />
                <Autocomplete
                  multiple
                  size="small"
                  limitTags={2}
                  width={300}
                  options={restaurants}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Restaurants" />
                  )}
                  sx={{
                    width: "300px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fff",
                    },
                    "& .MuiButtonBase-root": {
                      color: "#fff",
                    },
                    "& .MuiInputBase-root": {
                      color: "#fff",
                    },
                  }}
                />
              </Box>

              <main>
                {foodList?.map((food) => {
                  return (
                    <FoodBox
                      key={food.id}
                      imgSrc={imgFood}
                      title={food.name}
                      price={food.price}
                    />
                  );
                })}
              </main>
            </div>
          </div>
          <div className="right-side">
            <PaymentSect data={foods} />
          </div>
        </div>
      )}
    </>
  );
}

export default FoodCont;

const restaurants = [
  { title: "Bilka" },
  { title: "Navat" },
  { title: "Koreli" },
  { title: "Uygur Lezzeetleri" },
  { title: "Kacun" },
  { title: "Secel" },
];

const foodOptions = [
  { title: "Eggs, milk and milk products" },
  { title: "Fruits" },
  { title: "Grain, nuts and baking products" },
  { title: "Vegetables" },
  { title: "Fats and oils" },
  { title: "Herbs and Spices" },
  { title: "Meat, sausage and fish" },
  { title: "Others" },
];

const foods = [
  {
    id: 1,
    name: "kebab",
    price: 100,
  },
  {
    id: 2,
    name: "durum",
    price: 120,
  },
  {
    id: 3,
    name: "gozleme",
    price: 90,
  },
  {
    id: 4,
    name: "simit",
    price: 10,
  },
];
