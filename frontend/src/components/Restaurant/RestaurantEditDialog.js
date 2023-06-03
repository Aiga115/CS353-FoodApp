import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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
          <TextField
            autoFocus
            margin="dense"
            value={info.name}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={info.cuisine}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={info.phone}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={info.district}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            value={info.openingHours}
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
