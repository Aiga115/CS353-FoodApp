import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Cookies from "js-cookie";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function RestaurantEditDialog({ open, setOpen, info }) {
  const [name_, setName] = useState(info.name);
  const [phone_, setPhone] = useState(info.phone);
  const [district_, setDistrict] = useState(info.district);
  const [cuisine_, setCuisine] = useState(info.cuisine);
  const [openHours_, setOpenHours] = useState(info.openHours);
  const token = Cookies.get("Food");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const restaurantNAME = 1
    axios.put(`http://localhost:8080/restaurant-owner/restaurant/update/${restaurantNAME}`, {
      name: name_,
      phone: phone_,
      district: district_,
      cuisine: cuisine_,
      openHours: openHours_,
      minDeliveryCost: info.minDeliveryCost,
      numberOfOrders: info.numberOfOrders
    }, {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    })
      .then(response => {
        console.log(`Deleted restaurant with name ${restaurantNAME}`);
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Restaurant's information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            value={name_}
            type="text"
            fullWidth
            onChange={e => setName(e.target.value)}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={cuisine_}
            type="text"
            fullWidth
            onChange={e => setCuisine(e.target.value)}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={phone_}
            type="text"
            fullWidth
            onChange={e => setPhone(e.target.value)}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={district_}
            type="text"
            fullWidth
            onChange={e => setDistrict(e.target.value)}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={openHours_}
            type="text"
            fullWidth
            onChange={e => setOpenHours(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Save Changes</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
