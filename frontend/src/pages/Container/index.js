import React from "react";
import "./index.css";
import TopSect from "../../components/TopSect";
import FoodCont from "../../components/FoodCont";

function Container() {
  return (
    <div className="container">
      <TopSect />
      <FoodCont />
    </div>
  );
}

export default Container;
