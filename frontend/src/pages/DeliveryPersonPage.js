import React from "react";
import "../components/Container/Container.css";
import TopSect from "../components/TopSect";
import Table from 'react-bootstrap/Table';

function DeliveryPersonPage() {
  return (
    <div className="container">
      <TopSect />
      <div className="admin">
      <h2>Orders</h2>
        <Table class="center">
          <thead>
            <tr>
              <th>Restaurant name</th>
              <th>Customer's name</th>
              <th>Customer's phone</th>
              <th>Address</th>
              <th>Total cost</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DeliveryPersonPage;