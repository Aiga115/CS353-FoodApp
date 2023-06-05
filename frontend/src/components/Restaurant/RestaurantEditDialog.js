import * as React from "react";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function RestaurantEditDialog({ open, setOpen, info }) {
  console.log("info: ", info);
  const [name_, setName_] = useState(info.name);
  const [phone_, setPhone_] = useState(info.phone);
  const [district_, setDistrict_] = useState(info.district);
  const [cuisine_, setCuisine_] = useState(info.cuisine);
  const [openHours_, setOpenHours_] = useState(info.openHours);
  const token = Cookies.get("Food");

  console.log("name: ", name_)
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    axios.put(`http://localhost:8080/restaurant-owner/restaurant/update`,
        {
          name: name_,
          phone: phone_,
          district: district_,
          cuisine: cuisine_,
          openHours: openHours_,
          minDeliveryCost: info.minDeliveryCost,
          numberOfOrders: info.numberOfOrders,
        },
        {
          headers: {
            Authorization: token,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(`Deleted restaurant`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form action="" id="edit-restaurant" method="post" onSubmit={handleSubmit} > 
          <DialogTitle>Restaurant's information</DialogTitle>
          <DialogContent>
            <TextField
              defaultValue={info.name}
              type="text"
              fullWidth
              onChange={(e) => setName_(e.target.value)}
              variant="standard"
            />
            <TextField
              defaultValue={info.cuisine}
              type="text"
              fullWidth
              onChange={(e) => setCuisine_(e.target.value)}
              variant="standard"
            />
            <TextField
              defaultValue={info.phone}
              type="text"
              fullWidth
              onChange={(e) => setPhone_(e.target.value)}
              variant="standard"
            />
            <TextField
              defaultValue={info.district}
              type="text"
              fullWidth
              onChange={(e) => setDistrict_(e.target.value)}
              variant="standard"
            />
            <TextField
              defaultValue={info.openHours}
              type="text"
              fullWidth
              onChange={(e) => setOpenHours_(e.target.value)}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" value="edit-restaurant">Save Changes</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
