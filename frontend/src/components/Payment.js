import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./Payment.css";
import 'reactjs-popup/dist/index.css';


function PaymentPopup(props) {
    return (props.trigger) ? (<div className="popup">
    <div className="popup-inner">
        <button className="buttonClose" onClick={() => props.setTrigger(false)}>Close</button>
        {props.children}
    </div>
    
  </div>) : "";
  
}

export default PaymentPopup;
