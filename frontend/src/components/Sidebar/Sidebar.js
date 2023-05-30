import React from "react";
import "./Sidebar.css";
import { FaCog, FaUser, FaSignOutAlt,} from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoRestaurant } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
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
        <Link to="/"><Icon icon={<MdDashboard title="Order"/>} /></Link>
        <Link to="/profile"><Icon icon={<FaUser title="Your Profile"/>} /></Link>
        <Link to="/chat"><Icon icon={<IoChatbubbleEllipsesSharp title="Chat with sales rep"/>} /></Link>
        <Link to="/comingsoon"><Icon icon={<IoRestaurant title="Book a seat"/>} /></Link>
      </ul>

      <ul className="bottom-menu">
        <Icon icon={<FaSignOutAlt />} />
      </ul>
      
    </header>
  );
}


export default SideBar;
