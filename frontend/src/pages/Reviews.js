import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from "@mui/material/Box";
import im from "../components/images/food.jpg";


const Reviews = () => {


    return (
        <Box width={1} m={2} sx={{ display: 'flex', gap: '30px' }}>
            <Card sx={{ width: 345, maxHeight: 400 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title="You ordered Chorizo Paella"
                    subheader="September 14, 2022"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={im}
                    alt="dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Card sx={{ width: 345, maxHeight: 400 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            P
                        </Avatar>
                    }
                    title="You ordered Pizza"
                    subheader="April 4, 2023"
                />
                <div style={{height: 194}}>
                    <Typography sx={{color: '#000', textAlign:'center', marginBottom: '20px'}}>Do you want to include photo review?</Typography>
                    <div>
                        <label>
                            <input type="file" accept="image/*"/>
                        </label>
                    </div>
                </div>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Pizza was great!!!
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </CardActions>
            </Card>
        </Box>
    )
};
export default Reviews;