import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./EditMenuPopup.css";
import "reactjs-popup/dist/index.css";
function EditMenuPopup(props) {
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

export default EditMenuPopup;
