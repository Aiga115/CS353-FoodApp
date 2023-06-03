import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from "@mui/material/Stack";
import { Typography } from '@mui/material';

export default function RestaurantMenuEditDialog({ open, setOpen, menu }) {

    console.log("menu: ", menu)
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log("Menu edited")
    }
    const onAddFoodItem = () => {
        console.log("Adding new food item")
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Restaurant's Menu</DialogTitle>
                <DialogContent>
                    {
                        menu.map((food) => {
                            return <Stack key={food.id} direction="row" gap={2} alignItems="center">
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    value={food.name}
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    value={food.price}
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                            </Stack>
                        })
                    }
                    <Typography variant='body2' mt={3} sx={{ fontWeight: 600 }}>Add another food?</Typography>
                    <Stack direction="row" gap={2} alignItems="center">
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Price"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </Stack>
                    <Button variant='contained' sx={{ marginTop: '10px'}} onClick={()=>onAddFoodItem()}>Add</Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Save Changes</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
