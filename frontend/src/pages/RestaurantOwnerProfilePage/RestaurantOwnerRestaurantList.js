import React from "react";
import "../../components/Container/Container.css";
import TopSect from "../../components/TopSect";
import Table from 'react-bootstrap/Table';
import { FaTrashAlt } from "react-icons/fa";

const Icon = ({ icon }) => (
  <li>
    <p href="">{icon}</p>
  </li>
);
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function RestaurantOwnerRestaurantList() {
  return (
    <div className="container">
      <div className="admin">
      <h2>Restaurants</h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Restaurant Name</th>
              <th>Total number of orders</th>
              <th>Rank</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1</b></td>
              <td><b>Burger King</b></td>
              <td><b>22</b></td>
              <td><b>#1</b></td>
              <td><button type="button" class="btn btn-info" >Detailed Info</button></td>
            </tr>
            <tr>
              <td><b>2</b></td>
              <td><b>Mc Donalds</b></td>
              <td><b>30</b></td>
              <td><b>#2</b></td>
              <td><button type="button" class="btn btn-info" >Detailed Info</button></td>
            </tr>
            <tr>
              <td><b>3</b></td>
              <td><b>KFC</b></td>
              <td><b>24</b></td>
              <td><b>#4</b></td>
              <td><button type="button" class="btn btn-info" >Detailed Info</button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default RestaurantOwnerRestaurantList;
