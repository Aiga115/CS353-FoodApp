import React from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '@mui/material/Rating';


function CardBox({ imgSrc, title, name, rating }) {

  return (
    <div className="details">
      <img src={imgSrc} alt="" className="details-img" />
      <div className="food-name">
        <h2>{title}</h2>
      </div>

      <div className="food-details">
        <div>
          <p>
            {name}
          </p>
        </div>
        <Rating value={rating} readOnly />
      </div>
      <ToastContainer />
    </div>
  );
}

export default CardBox;
