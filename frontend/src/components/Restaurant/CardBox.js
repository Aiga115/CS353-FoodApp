import React from "react";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "reactjs-popup/dist/index.css";
import EditRestaurantInfoPopup from "./EditRestaurantInfoPopup";
import EditMenuPopup from "./EditMenuPopup";

function RestaurantOwnerCardBox(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [openningHours, setOpenningHours] = useState('');
  const [district, setDistrict] = useState('');
  const [minDeliveryCost, setMinDeliveryCost] = useState('');

  const handleTextInputChange1 = event => {
    setName(event.target.value);
  };

  const handleTextInputChange2 = event => {
    setPhone(event.target.value);
  };

  const handleTextInputChange3 = event => {
    setCuisine(event.target.value);
  };

  const handleTextInputChange4 = event => {
    setOpenningHours(event.target.value);
  };

  const handleTextInputChange5 = event => {
    setDistrict(event.target.value);
  };

  const handleTextInputChange6 = event => {
    setMinDeliveryCost(event.target.value);
  };

  const handleChanges = event => {
    //todo
  }

  return (
    <div className="details">
      <img src={props?.imgSrc} alt="" className="details-img" />
      <div className="food-name">
        <h2>{props?.title}</h2>
      </div>
      <div className="food-details">
        <div>
          <p>
            Name: {props?.name}
          </p>
        </div>
        <div>
          <p>
            Phone: {props?.phone}
          </p>
        </div>
        <div>
          <p>
            Cuisine: {props?.cuisine}
          </p>
        </div>
        <div>
          <p>
            Openning Hour: {props?.openningHours}
          </p>
        </div>
        <div>
          <p>
            District: {props?.district}
          </p>
        </div>
        <div>
          <p>
            Minimum delivery cost: {props?.minDeliveryCost}
          </p>
        </div>
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
                          onChange={handleTextInputChange1}
                          name="cardNumber"
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
                          onChange={handleTextInputChange2}
                          name="cardNumber"
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
                          onChange={handleTextInputChange3}
                          name="cardNumber"
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
                          onChange={handleTextInputChange4}
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
                          onChange={handleTextInputChange5}
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="cardNumber">
                        <h6 style={{ color: "#fff" }}>Min Delivery Cost: </h6>
                      </label>
                      <div class="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          onChange={handleTextInputChange6}
                          class="form-control "
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <button onClick={handleChanges}>
                Save changes
              </button>
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
