import React from "react";
import axios from "axios";
import "../FoodCont.css";
import Cookies from "js-cookie";
import food from "../../assets/restaurant.jpg";
import RestaurantCard from "./RestaurantCard";
import { useStateContext } from "../../App";

function List() {
  const { user } = useStateContext();
  const [restaurant, setRestaurant] = React.useState();
  const token = Cookies.get("Food");
  const isRestaurantOwner = user?.data?.role === "ROLE_RESTAURANT_OWNER";
  const isDeliveryPerson = user?.data?.role === "ROLE_DELIVERY_PERSON";
  const isCustomer = user?.data?.role === "ROLE_CUSTOMER";
  const isAdmin = user?.data?.role === "ROLE_ADMIN";

  //for restaurant owner only
  const getRestaurantList = async () => {
    const currRestList = await axios.get("http://localhost:8080/restaurant-owner/restaurants",
      {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      }
    );
    const currRestListAdmin = await axios.get("http://localhost:8080/admin/restaurant",{
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })
    setRestaurant(isAdmin ?currRestListAdmin.data.restaurants[0]: currRestList.data.restaurants[0]);
  };

  React.useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <>
      <div className="foodcontainer" style={{ justifyContent: "center" }}>
        <div className="left-side">
          <div className="cards">
            <main>
              <RestaurantCard
                imgSrc={food}
                name={restaurant?.name}
                phone={restaurant?.phone}
                openHours={restaurant?.openHours}
                district={restaurant?.district}
                minDeliveryCost={restaurant?.minDeliveryCost}
                cuisine={restaurant?.cuisine}
                numberOfOrders={restaurant?.numberOfOrders}
              />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
