import React from "react";
import { FaSearch } from "react-icons/fa";


function TopSect() {

  const user = 'Asli'
  return (
    <div className="top-section">
      <div className="user-info">
        <p className="user-name">Welcome {user} 👋</p>

      </div>
    </div>
  );
}

export default TopSect;
