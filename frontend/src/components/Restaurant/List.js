import React from "react";
import "../FoodCont.css";
import CardBox from "./CardBox";
import food from "../../assets/restaurant.jpg";


function List() {
  return (
    <>
      <div className="foodcontainer" style={{ justifyContent: 'center' }}>
        <div className="left-side">
          <div className="cards">
            <main>
              <CardBox imgSrc={food} name={""} phone={""} openningHours = {""} rating={0} district = {""} minDeliveryCost = {""} cuisine={""} numberOfOrders={""}></CardBox>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
