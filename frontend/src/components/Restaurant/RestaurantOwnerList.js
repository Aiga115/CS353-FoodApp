import React from "react";
import "../FoodCont.css";
import RestaurantOwnerCardBox from "./RestaurantOwnerCardBox";
import food from "../../assets/restaurant.jpg";

function RestaurantOwnerList() {
  return (
    <>
      <div className="foodcontainer" style={{ justifyContent: 'center' }}>
        <div className="left-side">
          <div className="cards">
            <main>
              <RestaurantOwnerCardBox imgSrc={food} name={"Uygur Lezzetleri"} phone={"+90111111111"} openningHours = {"10.00"} rating={2} district = {"Çankaya"} minDeliveryCost = {"50 tl"}></RestaurantOwnerCardBox>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantOwnerList;
