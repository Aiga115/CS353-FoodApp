import React from "react";
import "./Container.css";
import TopSect from "../TopSect"
import FoodCont from "../FoodCont";
import Filter from "../Filter/Filter";


function Container() {
  return (
    <div className="container">
      <TopSect />
      <Filter/>
      <FoodCont />
    </div>
  );
}

export default Container;
