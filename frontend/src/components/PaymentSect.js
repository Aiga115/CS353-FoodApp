import React, {useState} from "react";
import { FaTrashAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./PaymentForm.css";
import "reactjs-popup/dist/index.css";
import PaymentDialog from "./PaymentDialog";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function PaymentSect(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [visible, setVisible] = useState(true);
  const [openPayment, setOpenPayment] = useState(false);

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
                <Button variant="contained" onClick={removeElement}><FaTrashAlt /></Button>
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
            <Button variant="contained" onClick={() => setOpen(true)}>Pay</Button>
          </div>
         <PaymentDialog open={open} setOpen={setOpen} info={props}></PaymentDialog>
        </div>
      </div>
    </>
  );
}

export default PaymentSect;
