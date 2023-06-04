import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

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

const LoginCard = styled(Card)({
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
    '& a': {
        textDecoration: 'none',
        '&:visited': {
            textDecoration: 'none',
        }
    },
    '& .MuiTextField-root': {
        '& .MuiFormLabel-root': {
            fontSize: '14px',
            color: '#c1c0b9'
        },
        '& .MuiOutlinedInput-root': {
            color: '#e0e0e0',
            '&:hover': {
                borderColor: '#c1c0b9'
            }
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
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


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("https://example.com/login", { email, password, username })
            .then(response => {
                console.log(response)
            })
        navigate('/main')
    }
    return (
        <Box display="flex" width={1} justifyContent="space-between" alignItems="center">
            <LoginCard>
                <form action="" id="login" method="post" onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                    <Box textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '25px' }}>Welcome!</Typography>
                    </Box>
                    <TextField
                        label="Email"
                        size='small'
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        size='small'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Username"
                        size='small'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <Box m={1} display="flex" gap={0.5} mt={2}>
                        <Typography sx={{ fontSize: '14px' }}>Don't have an account ?</Typography>
                        <Link to="/register">
                            <Typography color="primary" sx={{ fontSize: '14px', color: '#f96d00' }}>Register</Typography>
                        </Link>
                    </Box>
                    <Button variant='contained' sx={{
                        background: '#a55233', marginTop: '30px', textTransform: 'none', width: '120px', '&:hover': {
                            backgroundColor: '#a55233'
                        }
                    }} type='submit' value="login">Submit</Button>
                </form>
            </LoginCard>
            <ImBox />
        </Box>
    )
};
export default Login;