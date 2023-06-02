import React, {useState} from "react";
import "../FoodCont.css";
import RestaurantOwnerCardBox from "./RestaurantOwnerCardBox";
import food from "../../assets/restaurant.jpg";

function RestaurantOwnerList() {

  const [data, setData] = useState([{}])

  const handleClick = () => {
    setData([...data,{}])
  }

  return (
    <>
    <div>
      <button onClick={handleClick}>add</button>
    </div>
      <div className="foodcontainer" style={{ justifyContent: 'center' }}>
        <div className="left-side">
        <div className="cards">
        <main>
        {
          data.map(() =>
            <RestaurantOwnerCardBox imgSrc={food}></RestaurantOwnerCardBox>
          )
        }
        </main>
         </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantOwnerList;
