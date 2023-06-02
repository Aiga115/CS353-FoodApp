import React from "react";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "reactjs-popup/dist/index.css";
import Rating from '@mui/material/Rating';
import EditRestaurantInfoPopup from "./EditRestaurantInfoPopup";
import EditMenuPopup from "./EditMenuPopup";


function RestaurantOwnerCardBox({ imgSrc, title, name, rating, phone, openningHours, district, minDeliveryCost, button}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
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
      <div>
      <button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>
        edit
      </button>
      </div>
      <ToastContainer />
      <EditRestaurantInfoPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
              <div>
                <div class="card">
                  <form role="form">
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6 style={{ color: "#fff" }}>Name: </h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card name"
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                    <p></p>
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6 style={{ color: "#fff" }}>Phone: </h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card name"
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6 style={{ color: "#fff" }}>Cuisine: </h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card name"
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6 style={{ color: "#fff" }}>Openning hour: </h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card name"
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6 style={{ color: "#fff" }}>District: </h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card name"
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <button type="button" class="btn btn-info" onClick={() => setButtonPopup1(true)}>
                Edit menu
              </button>
            </div>
          </EditRestaurantInfoPopup>
          <EditMenuPopup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
            <div>
              <div>
                <div class="card">
                  <form role="form">
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6 style={{ color: "#fff" }}>Food name</h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card name"
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                    <p></p>
                    <div>
                      <button type="button" class="button">
                        Add
                      </button>
                      <p></p>
                      <button type="button" class="button">
                        Delete
                      </button>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <label for="cardNumber">
                          <h6 style={{ color: "#fff" }}>Enter new price</h6>
                        </label>
                        <div class="input-group">
                          <input
                            type="text"
                            name="cardNumber"
                            placeholder="Balance"
                            class="form-control "
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <p></p>
                    <div>
                      <button type="button" class="button">
                        Change the price
                      </button>
                    </div>
                    <div></div>
                  </form>
                </div>
              </div>
            </div>
          </EditMenuPopup>
    </div>
  );
}

export default RestaurantOwnerCardBox;
