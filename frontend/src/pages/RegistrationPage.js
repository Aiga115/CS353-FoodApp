import React from 'react';

//components
import {
    TextField,
    Button,
    Box,
    Card,
    Typography,
} from '@mui/material';
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import bg from '../assets/bg.jpg';

const ImBox = styled(Box)({
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bg})`,
    borderRadius: 'unset',
    backgroundSize: "cover",

});

const RegCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '500px',
    gap: '1rem',
    padding: '1.25rem',
    height: '100%',
    borderRadius: 'unset',
    boxShadow: 'none',
    backgroundColor: '#402a23',
    color: '#e0e0e0',
    '& a':{
        textDecoration: 'none',
        '&:visited':{
            textDecoration: 'none',
        }
    },
    '& .MuiTextField-root': {
        '& .MuiFormLabel-root': {
            fontSize: '14px',
            color: '#c1c0b9'
        },
        '& .MuiOutlinedInput-root':{
            color: '#e0e0e0',
            '&:hover': {
                borderColor: '#c1c0b9'
            }
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor: '#c1c0b9',
        },
        '& fieldset': {
            borderColor: '#c1c0b9',
            '&:hover': {
                borderColor: '#c1c0b9'
            }
        }
    }

});

const Registration = () => {
    return (
        <Box display="flex" width={1} justifyContent="space-between" alignItems="center">
            <RegCard>
                <Box textAlign="center">
                    <Typography variant="h6" sx={{fontWeight: 600, marginBottom: '25px'}}>Register your account</Typography>
                </Box>
                <TextField label="Email" size='small'/>
                <TextField label="Password" size='small' />
                <TextField label="Fullname" size='small'/>
                <TextField label="Username" size='small'/>
                <TextField label="Address" size='small'/>
                <TextField label="Number" size='small'/>
                <Box m={1} display="flex" gap={0.5} mt={2}>
                    <Typography sx={{ fontSize: '14px' }}>Already have an account?</Typography>
                    <Link to="/">
                        <Typography color="primary" sx={{ fontSize: '14px', color: '#f96d00' }}>Sign In</Typography>
                    </Link>
                </Box>
                <Button variant='contained' sx={{ background: '#a55233', marginTop: '30px', textTransform: 'none', width: '120px', '&:hover':{
                    backgroundColor: '#a55233'
                }}}>Submit</Button>
            </RegCard>
            <ImBox />
        </Box>
    )
};
export default Registration;