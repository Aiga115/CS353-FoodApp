import React from "react";
import "../FoodCont.css";
import CustomerCardBox from "./CustomerCardBox";
import food from "../../assets/restaurant.jpg";


function CustomerList() {
  return (
    <>
      <div className="foodcontainer" style={{ justifyContent: 'center' }}>
        <div className="left-side">
          <div className="cards">
            <main>
              <CustomerCardBox imgSrc={food} name={""} phone={""} openningHours = {""} rating={0} district = {""} minDeliveryCost = {""}></CustomerCardBox>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
