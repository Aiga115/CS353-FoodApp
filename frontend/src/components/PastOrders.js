import React from "react";
import Table from 'react-bootstrap/Table';
import "./PastOrders.css";

function PastOrder() {
  return (
    <section className="profile-container">
      <h2>Past Orders</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th >#</th>
            <th>Date</th>
            <th>Restaurant Name</th>
            <th>Item</th>
            <th>Quantitiy</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>1</b></td>
            <td><b>02.04.2023</b></td>
            <td><b>Burger King</b></td>
            <td><b>Hamburger Menu</b></td>
            <td><b>1</b></td>
            <td>70 tl</td>
          </tr>
          <tr>
            <td><b>2</b></td>
            <td><b>30.03.2023</b></td>
            <td><b>KFC</b></td>
            <td><b>Chicken</b></td>
            <td><b>2</b></td>
            <td>150 tl</td>
          </tr>
          <tr>
            <td><b>3</b></td>
            <td><b>28.03.2023</b></td>
            <td><b>York</b></td>
            <td><b>Sushi</b></td>
            <td><b>3</b></td>
            <td>200 tl</td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}
export default PastOrder;