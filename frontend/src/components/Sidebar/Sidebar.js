import React from "react";
import "./Sidebar.css";
import { FaHome, FaUser, FaSignOutAlt,} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Icon = ({ icon }) => (
  <li>
    <p href="">{icon}</p>
  </li>
);


function SideBar() {
  return (
    <header>

      
      <ul className="top-menu">
        <Link to="/"><Icon icon={<FaHome title="Order"/>} /></Link>
        <Link to="/profile"><Icon icon={<FaUser title="Your Profile"/>} /></Link>
        <Link to="/"><Icon icon={<FaSignOutAlt title="Sign out"/>} /></Link>
      </ul>
    </header>
  );
}


export default SideBar;
