import React from "react";
import "./Container.css";
import TopSect from "../TopSect"
import FoodCont from "../FoodCont";
import Filter from "../Filter/Filter";
import FilterRestaurant from "../Filter/FilterRestaurant";


function Container() {
  return (
    <div className="container">
      <TopSect />
      <div style={{display: 'flex'}}>
        <Filter />
        <FilterRestaurant/>
      </div>
      <FoodCont />
    </div>
  );
}

export default Container;
