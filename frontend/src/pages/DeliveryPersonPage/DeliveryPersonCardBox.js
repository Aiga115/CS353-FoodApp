import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DeliveryPersonCardBox({ imgSrc, title, restaurantName, customerName, customerPhoneNumber, customerAddress, totalCost}) {

  return (
    <div className="details">
      <img src={imgSrc} alt="" className="details-img" />
      <div className="food-name">
        <h2>{title}</h2>
      </div>

      <div className="food-details">
        <div>
          <p>
            Restaurant's name: {restaurantName}
          </p>
        </div>
        <div>
          <p>
            Customer's name: {customerName}
          </p>
        </div>
        <div>
          <p>
            Customer's phone: {customerPhoneNumber}
          </p>
        </div>
        <div>
          <p>
          Address: {customerAddress}
          </p>
        </div>
        <div>
          <p>
            Total cost: {totalCost}
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DeliveryPersonCardBox;
