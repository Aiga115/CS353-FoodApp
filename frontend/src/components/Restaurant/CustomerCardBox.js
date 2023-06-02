import React from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '@mui/material/Rating';


function CustomerCardBox({ imgSrc, title, name, rating, phone, openningHours, district, minDeliveryCost}) {

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
        <div>
          <p>
            Phone: {phone}
          </p>
        </div>
        <div>
          <p>
            Openning Hour: {openningHours}
          </p>
        </div>
        <div>
          <p>
            District: {district}
          </p>
        </div>
        <div>
          <p>
            Minimum delivery cost: {minDeliveryCost}
          </p>
        </div>
        <Rating value={rating} readOnly />
      </div>
      <ToastContainer />
    </div>
  );
}

export default CustomerCardBox;
