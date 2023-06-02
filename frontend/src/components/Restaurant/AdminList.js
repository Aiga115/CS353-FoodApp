import React, {useState} from "react";
import "../FoodCont.css";
import AdminCardBox from "./AdminCardBox";
import food from "../../assets/restaurant.jpg";


function AdminList() {
 /* const [deleteData, setDeleteData] = useState([])
    const handleDelete = (i) =>{
    const deleteVal = [...deleteData]
    deleteVal.splice(i, 1)
    setDeleteData(deleteVal)
  }*/
  return (
    <>
      <div className="foodcontainer" style={{ justifyContent: 'center' }}>
        <div className="left-side">
          <div className="cards">
            <main>
                <AdminCardBox imgSrc={food} name={""} phone={""} openningHours = {""} rating={0} district = {""} minDeliveryCost = {""} cuisine={""} numberOfOrders={""}></AdminCardBox>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminList;
