import React from "react";
import "../../components/FoodCont.css";
import DeliveryPersonCardBox from "./DeliveryPersonCardBox";
import image from "../../assets/bb.png";


function DeliveryPersonList() {
  return (
    <>
      <div className="foodcontainer" style={{ justifyContent: 'center' }}>
        <div className="left-side">
          <div className="cards">
            <main>
              <DeliveryPersonCardBox imgSrc={image} restaurantName={""} customerName={""} customerPhoneNumber = {""} customerAddress={""} totalCost = {""}></DeliveryPersonCardBox>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryPersonList;