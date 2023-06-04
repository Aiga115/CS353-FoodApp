import React, {useState} from "react";
import { FaTrashAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./PaymentForm.css";
import "reactjs-popup/dist/index.css";
import PaymentDialog from "./PaymentDialog";


function PaymentSect(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  const [open, setOpen] = useState(false);

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
              <div>
                <div className="pay">
              <div>
                <b>Food1 </b>
                <p>50 tl</p>
              </div>
              <p>5</p>
              <p>250 tl</p>
            </div>

            <div className="pay">
              <span>
                <button onClick={removeElement}>
                  <FaTrashAlt />
                </button>
              </span>
            </div>
              </div>
            
          </article>
          )}

          <figure>
            <div>
              <p>Total Price: </p>
            </div>
            <div>
              <p>475 tl</p>
            </div>
          </figure>

          <div>
            <button className="button" variant='contained' onClick={() => setOpen(true)}>
              Pay
            </button>
          </div>
         <PaymentDialog open={open} setOpen={setOpen} info={props}></PaymentDialog>
        </div>
      </div>
    </>
  );
}

export default PaymentSect;