import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function PaymentDialog({ open, setOpen, info }) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("Edited")
  }

  const [value, setValue] = React.useState('');
  const [helperText, setHelperText] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    if (value === null) {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment</DialogTitle>
        <DialogContent>
        <FormLabel>Total price: </FormLabel>
        <div>
        <FormLabel>Card name: </FormLabel>
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
        <FormLabel>Balance: </FormLabel>
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
        <FormLabel>Notes: </FormLabel>
        <TextField
            autoFocus
            margin="dense"
            value={info.name}
            type="text"
            fullWidth
            variant="standard"
        />
        <DialogActions>
          <form onSubmit={handleSubmit2}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <div style={{textAlign: 'left'}}>
        <FormLabel id="registered-card-1">Registered cards</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best" control={<Radio />} label="Registered card 1" />
          <FormControlLabel value="worst" control={<Radio />} label="Registered card 2" />
        </RadioGroup>
        </div>
      </FormControl>
          </form>
        </DialogActions>
        </div>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Pay</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
