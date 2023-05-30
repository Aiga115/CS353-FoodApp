import React, { useState, useEffect } from "react";
import "../../components/container.css";
import TopSect from "../../components/TopSect";
import Table from 'react-bootstrap/Table';
import "reactjs-popup/dist/index.css";
import Popup from "./EditMenuPopup";

function RestaurantOwnerRestaurantList() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="container">
      <div className="admin">
      <h2>Restaurants</h2>
        <Table>
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Edit Menu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Burger King</b></td>
              <td><button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button></td>
            </tr>
            <tr>
              <td><b>Mc Donalds</b></td>
              <td><button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button></td>
            </tr>
            <tr>
              <td><b>KFC</b></td>
              <td><button type="button" class="btn btn-info" onClick={() => setButtonPopup(true)}>Edit</button></td>
            </tr>
          </tbody>
        </Table>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
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
          </Popup>
      </div>
    </div>
    
  );
}
export default RestaurantOwnerRestaurantList;
