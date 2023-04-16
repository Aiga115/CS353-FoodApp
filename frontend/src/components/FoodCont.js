import React from "react";
import "./FoodCont.css";
import FoodBox from "./FoodBox";
import food from "./images/food.jpg";
import PaymentSect from "./PaymentSect";
import { Link } from "react-router-dom";



function FoodCont() {
  return (
    <>
      <div className="foodcontainer">
        <div className="left-side">
          <div className="cards">

            <main>
              <FoodBox imgSrc={food}price={"20 tl"}></FoodBox>
              <FoodBox imgSrc={food}price={"40 tl"} />
              <FoodBox imgSrc={food}price={"60 tl"} />
              <FoodBox imgSrc={food}price={"$7"} />
              <FoodBox imgSrc={food}price={"$10"} />
              <FoodBox imgSrc={food}price={"$15"} />
            </main>
          </div>
        </div>
        <div className="right-side">
          <PaymentSect />
        </div>
      </div>
    </>
  );
}

export default FoodCont;
