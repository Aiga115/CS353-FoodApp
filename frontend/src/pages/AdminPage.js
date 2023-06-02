import React from "react";
import "../components/container.css"
import List from "../components/Restaurant/AdminList";

function AdminRestaurantsPage() {
  return (
    <div className="container">
        <List/>
    </div>
  );
}

export default AdminRestaurantsPage;