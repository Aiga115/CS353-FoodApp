import React from "react";
import "../FoodCont.css";
import food from "../../assets/restaurant.jpg";
import RestaurantCard from "./RestaurantCard";


function List({ user }) {
  return (
    <>
      <div className="foodcontainer" style={{ justifyContent: 'center' }}>
        <div className="left-side">
          <div className="cards">
            <main>
              {
                restaurants.map((restaurant) => {
                  return <RestaurantCard
                    key={restaurant.name}
                    id={restaurant.id}
                    imgSrc={restaurant.imgSrc}
                    name={restaurant.name}
                    phone={restaurant.phone}
                    openingHours={restaurant.openingHours}
                    rating={restaurant.rating}
                    comment={restaurant.comment}
                    district={restaurant.district}
                    minDeliveryCost={restaurant.minDeliveryCost}
                    cuisine={restaurant.cuisine}
                    numberOfOrders={restaurant.numberOfOrders}
                    isAdmin={restaurant.isAdmin}
                    isRestaurantOwner={restaurant.isRestaurantOwner}
                    menu={restaurant.menu}
                  />
                })
              }
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;

const restaurants = [
  {
    id:1,
    imgSrc: food,
    name: 'Bilka',
    phone: '90-56-56',
    cuisine: 'Turkish',
    openingHours: '8:30',
    comment: 'Well, I liked the food and the delivery service was fast',
    rating: 3,
    district: 'Bilkent University, Chankaya',
    minDeliveryCost: '',
    numberOfOrders: 12,
    isAdmin: false,
    isRestaurantOwner: true, 
    menu: [
      {
        id: 1,
        name: "kebab",
        price: 200, 
      },
      {
        id:2, 
        name: 'gozleme', 
        price: 100
      }, 
      {
        id:3, 
        name: 'durum', 
        price: 120
      }
    ]
  },
  {
    id:2,
    imgSrc: food,
    name: 'Koreli',
    phone: '08-59-56',
    cuisine: 'Korean',
    openingHours: '10:30',
    rating: 5,
    comment: 'Well, I liked the food and the delivery service was fast',
    district: 'Tunus street 4',
    minDeliveryCost: '',
    numberOfOrders: 100,
    isAdmin: false,
    isRestaurantOwner: true, 
    menu: [
      {
        id:4,
        name: 'teokbokki', 
        price: 120 
      },
      {
        id: 5, 
        name: 'ramen', 
        price: 100
      }
    ]
  }
]