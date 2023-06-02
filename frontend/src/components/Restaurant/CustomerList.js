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
              <CustomerCardBox imgSrc={food} name={"Uygur Lezzetleri"} phone={"+90111111111"} openningHours = {"10.00"} rating={2} district = {"Çankaya"} minDeliveryCost = {"50 tl"}></CustomerCardBox>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
