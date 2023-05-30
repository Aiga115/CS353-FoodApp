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
              <CardBox imgSrc={food} name={"Uygur Lezzetleri"} rating={2}></CardBox>
              <CardBox imgSrc={food} name={"Bilka"} rating={4}/>
              <CardBox imgSrc={food} name={"Koreli"} rating={2}/>
              <CardBox imgSrc={food} name={"Kacun"} rating={0}/>
              <CardBox imgSrc={food} name={"Navat"}rating={2} />
              <CardBox imgSrc={food} name={"Secel"} rating={4}/>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
