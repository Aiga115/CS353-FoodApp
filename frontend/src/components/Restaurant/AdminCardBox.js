import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '@mui/material/Rating';



function AdminCardBox(props) {
  return (
    <div className="details">
      <img src={props.imgSrc} alt="" className="details-img" />
      <div className="food-name">
        <h2>{props.title}</h2>
      </div>

      <div className="food-details">
        <div>
          <p>
            Name: {props.name}
          </p>
        </div>
        <div>
          <p>
            Number of orders: {props.numberOfOrders}
          </p>
        </div>
        <div>
          <p>
            Cuisine: {props.cuisine}
          </p>
        </div>
        <div>
          <p>
            Phone: {props.phone}
          </p>
        </div>
        <div>
          <p>
            Openning Hour: {props.openningHours}
          </p>
        </div>
        <div>
          <p>
            District: {props.district}
          </p>
        </div>
        <div>
          <p>
            Minimum delivery cost: {props.minDeliveryCost}
          </p>
        </div>
        <Rating value={props.rating} readOnly />
      </div>
      <div>
        <button>delete</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminCardBox;
