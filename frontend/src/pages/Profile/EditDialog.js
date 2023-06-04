import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormLabel from '@mui/material/FormLabel';

export default function EditDialog({ open, setOpen, info }) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    console.log("Edited")
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogContent>
        <div>
        <FormLabel>Phone number: </FormLabel>
        <TextField
            autoFocus
            margin="dense"
            value={info.name}
            type="text"
            fullWidth
            variant="standard"
        />
        </div>
        <div>
        <FormLabel>Address: </FormLabel>
        <TextField
            autoFocus
            margin="dense"
            value={info.name}
            type="text"
            fullWidth
            variant="standard"
        />
        </div>
        <div>
        <FormLabel>Add a new address: </FormLabel>
        <TextField
            autoFocus
            margin="dense"
            value={info.name}
            type="text"
            fullWidth
            variant="standard"
        />
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
