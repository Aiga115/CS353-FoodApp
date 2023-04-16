import React from "react";
import "./Container.css";
import TopSect from "../TopSect"
import FoodCont from "../FoodCont";


function Container() {
  return (
    <div className="container">
      <TopSect />
      <FoodCont />
    </div>
  );
}

export default Container;
