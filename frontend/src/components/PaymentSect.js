import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./PaymentForm.css";
import Popup from "./Payment";
import "reactjs-popup/dist/index.css";

function PaymentSect({ data }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  console.log()
  const prices = data.map((item)=>item.price)
  const totalPrice = prices.reduce((sum = 0, price)=>sum+price);
  return (
    <>
      <div className="payment">
        <div className="name">
          <h4>Item</h4>
          <p>Quantity</p>
          <p>Price</p>
        </div>

        <div className="price">
          {visible && (
            <article>
              {
                data.map((item) => {
                  return <div key={item.id}>
                    <div className="pay">
                      <div>
                        <b>Food: {item.name}</b>
                        <p>{item.price}tl</p>
                      </div>
                      <p>{}</p>
                      <p>{}</p>
                    </div>

                    <div className="pay">
                      <span>
                        <button onClick={removeElement}>
                          <FaTrashAlt />
                        </button>
                      </span>
                    </div>
                  </div>
                })
              }

            </article>
          )}

          <figure>
            <div>
              <p>Total Price: </p>
            </div>
            <div>
              <p>{totalPrice}</p>
            </div>
          </figure>

          <div>
            <button className="button" onClick={() => setButtonPopup(true)}>
              Pay
            </button>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div class="card">
              <form role="form">
                <label for="cardNumber">
                  <h6>Total Price: 200 tl</h6>
                </label>
                <div class="form-group">
                  <label for="cardNumber">
                    <h6>Card Name</h6>
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
                <div class="row">
                  <div class="form-group">
                    <label for="cardNumber">
                      <h6>Balance</h6>
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
                    Pay
                  </button>
                </div>
                <p></p>
                <div>
                  <button type="button" class="button">
                    Use registered credit card
                  </button>
                </div>
              </form>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
}

export default PaymentSect;
