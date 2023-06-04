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
import FormHelperText from '@mui/material/FormHelperText';
import { useThemeProps } from '@mui/material';

export default function NewCardRegistrationDialog({ open, setOpen, info }) {

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
        <DialogTitle>New card registration</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
