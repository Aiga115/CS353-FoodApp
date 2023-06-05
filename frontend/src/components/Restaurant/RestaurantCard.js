import * as React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RestaurantEditDialog from './RestaurantEditDialog';
import RestaurantMenuEditDialog from './RestaurantMenuEditDialog';
import { Stack, Box } from '@mui/material';
import { useStateContext } from '../../App';

export default function RestaurantCard(props) {
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const { user } = React.useContext();
    const token = Cookies.get("Food");
    const isAdmin = user?.data?.role === 'ROLE_RESTAURANT_ADMIN'
    const isRestaurantOwner = user?.data?.role === 'ROLE_RESTAURANT_OWNER'
    const isDeliveryPerson = user?.data?.role === 'ROLE_DELIVERY_PERSON'

    // when admin deleted restaurant function
    const onDeleteRestaurant = () => {
        const restaurantNAME = 1
        axios.delete(`http://localhost:8080/restaurant-owner/restaurant/delete/${restaurantNAME}`, {
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
        <>
            <Card sx={{ width: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={props.imgSrc}
                    title="restaurant's image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.comment}
                    </Typography>
                    <Box spacing={1} mt={.5} mb={1.5}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='subtitle2'>
                                Cuisine
                            </Typography>
                            <Typography variant='subtitle2'>{props.cuisine}</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='subtitle2'>
                                Phone number
                            </Typography>
                            <Typography variant='subtitle2'>{props.phone}</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='subtitle2'>
                                District
                            </Typography>
                            <Typography variant='subtitle2'>{props.district}</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant='subtitle2'>
                                Opening Hours
                            </Typography>
                            <Typography variant='subtitle2'>{props.openingHours}</Typography>
                        </Stack>
                    </Box>
                    {
                        props?.isAdmin && <Box spacing={1} mt={.5} mb={1.5}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant='subtitle2'>
                                    Number of orders
                                </Typography>
                                <Typography variant='subtitle2'>{props.numberOfOrders}</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant='subtitle2'>
                                    Minimum Delivery Cost
                                </Typography>
                                <Typography variant='subtitle2'>{props.minDeliveryCost}</Typography>
                            </Stack>
                        </Box>
                    }
                    <Rating name="read-only" value={props.rating} readOnly />
                </CardContent>
                {
                    props?.isRestaurantOwner && <CardActions>
                        <Button variant='contained' onClick={() => setOpen(true)}>Edit</Button>
                        <Button variant='contained' onClick={() => setOpenMenu(true)}>Edit Menu</Button>
                    </CardActions>
                }
                {
                    props?.isAdmin && <CardActions>
                        <Button onClick={() => onDeleteRestaurant(props.id)}></Button>
                    </CardActions>
                }

            </Card>
            <RestaurantEditDialog open={open} setOpen={setOpen} info={props} />
            <RestaurantMenuEditDialog open={openMenu} setOpen={setOpenMenu} menu={props.menu} />
        </>
    );
}