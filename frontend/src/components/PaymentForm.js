import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./PaymentForm.css";
import "reactjs-popup/dist/index.css";
function PaymentFormPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="buttonClose" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PaymentFormPopup;
