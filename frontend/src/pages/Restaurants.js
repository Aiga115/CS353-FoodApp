import React from "react";

//components
import List from "../components/Restaurant/List";
import "./Container/index.css"

const Restaurants = () => {

    const user = {
            name: "Asli",
            username: 'asli-karaman',
            fullname: "Asli Karaman",
            email: "asli.karaman@ug.bilkent.edu.tr",
            phoneNumber: "1234567890",
            addresses: ["Bilkent University Dormitories", "Bilkent University"],
            isAdmin: false
        }

    return <div className="container">
        <List user={user}/>
    </div>

}
export default Restaurants;