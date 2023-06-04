import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormLabel from '@mui/material/FormLabel';

export default function RestaurantEditDialog({ open, setOpen, info }) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("Edited")
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Restaurant's information</DialogTitle>
        <DialogContent>
          <FormLabel>Restaurant name: </FormLabel>
          <TextField
            autoFocus
            margin="dense"
            value=""
            type="text"
            fullWidth
            variant="standard"
          />
          <FormLabel>Cuisine: </FormLabel>
          <TextField
            autoFocus
            margin="dense"
            value=""
            type="text"
            fullWidth
            variant="standard"
          />
          <FormLabel>Phone number: </FormLabel>
          <TextField
            autoFocus
            margin="dense"
            value=""
            type="text"
            fullWidth
            variant="standard"
          />
          <FormLabel>Distirict: </FormLabel>
          <TextField
            autoFocus
            margin="dense"
            value=""
            type="text"
            fullWidth
            variant="standard"
          />
          <FormLabel>Openning hours: </FormLabel>
          <TextField
            autoFocus
            margin="dense"
            value=""
            type="text"
            fullWidth
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
