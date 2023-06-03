import * as React from 'react';
import { useState } from 'react';
import "./Container/index.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from "@mui/material/Box";
import im from "../assets/food.jpg";


const Reviews = () => {

    const [reviewList, setReviewList] = useState([]);
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    const [image, setImage] = useState();
    const [updatedImage, setUpdatedImage] = useState(image);
    const [ratingValue, setRatingValue] = useState(0);

    function handleImageInput(e) {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleReviewAddition = () => {
        setReviewList([...reviewList, { review: '' }])
    }

    const handleReviewInput = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setUpdated(message);
    };

    const handleClick2 = () => {
        setUpdatedImage(image)
    }



    return (
        <div className='container'>
            <Box width={1} m={2} sx={{ display: 'flex', gap: '30px' }}>
                <Card sx={{ width: 345, maxHeight: 600 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                P
                            </Avatar>
                        }
                        title="You ordered Pizza at Bilka"
                        subheader="200TL - April 4, 2023"
                    />
                    <div style={{ height: 130 }}>
                        <Typography sx={{ color: '#000', textAlign: 'center', marginBottom: '20px' }}>Do you want to include photo review?</Typography>
                        <div>
                            <label>
                                <input type="file" onChange={handleImageInput} style={{ display: "block", margin: "auto" }} />
                            </label>
                        </div>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', alignItems: 'center' }}>
                        <Typography sx={{ color: '#000', textAlign: 'center', marginBottom: '20px' }}>Do you want to include rating by giving stars?</Typography>
                        <Rating
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }} 
                        />
                    </div>
                    <div style={{ height: 150 }}>
                        <Typography sx={{ color: '#000', textAlign: 'center', marginBottom: '5px' }}>Do you want to include comments about the order?</Typography>
                        <div style={{ padding: "0px 5px 5px 8px", height: "100%" }}>
                            <input type="text" style={{ width: "100%", height: "50%", padding: "12px 20px", margin: "8px 0", display: "inline-block", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }} onChange={handleReviewInput} value={message} />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 5px 10px 10px" }}>
                        <button type="button" style={{ padding: "3px 3px 5px 5px", display: "inline-block", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }} onClick={(e) => { handleClick(e); handleReviewAddition(e); handleClick2(e); }}>Submit</button>
                    </div>

                </Card>
                {reviewList.map((singleReview, index) => (
                    <div key={index}>
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
                                height="195"
                                image={updatedImage}
                                alt="dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" >
                                    {updated}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </Box>
        </div>
    )
};
export default Reviews;