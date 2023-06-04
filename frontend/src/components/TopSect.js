import React from "react";
import { FaSearch } from "react-icons/fa";

import { useStateContext } from "../App";
function TopSect() {
const {user} = useStateContext();
  return (
    <div className="top-section">
      <div className="user-info">
        <p className="user-name">Welcome {user?.data?.username} 👋</p>

      </div>
    </div>
  );
}

export default TopSect;
