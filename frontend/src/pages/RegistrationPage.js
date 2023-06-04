import React from 'react';
import { alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//components
import { TextField, Button, Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import bg from "../assets/bg.jpg";

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const ImBox = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundImage: `url(${bg})`,
  borderRadius: "unset",
  backgroundSize: "cover",
});

const RegCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  minWidth: "500px",
  gap: "1rem",
  padding: "1.25rem",
  height: "100%",
  borderRadius: "unset",
  boxShadow: "none",
  backgroundColor: "#402a23",
  color: "#e0e0e0",
  "& a": {
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none",
    },
  },
  "& .MuiTextField-root": {
    "& .MuiFormLabel-root": {
      fontSize: "14px",
      color: "#c1c0b9",
    },
    "& .MuiOutlinedInput-root": {
      color: "#e0e0e0",
      "&:hover": {
        borderColor: "#c1c0b9",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#c1c0b9",
    },
    "& fieldset": {
      borderColor: "#c1c0b9",
      "&:hover": {
        borderColor: "#c1c0b9",
      },
    },
  },
});

const Registration = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                <TextField label="Number" size='small'/>
                <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        User type
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Customer
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Delivery person
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Restaurant owner
        </MenuItem>
      </StyledMenu>
    </div>
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

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = React.useState("");

  const handleRadioChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", {
        email,
        password,
        username,
        fullname,
        number,
        role
      })
      .then((response) => {
        if(response){
          navigate('/')
        }
      });
  };
  return (
    <Box
      display="flex"
      width={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <RegCard>
        <form
          action=""
          id="registration"
          method="post"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, marginBottom: "25px" }}
            >
              Register your account
            </Typography>
          </Box>
          <TextField
            label="Email"
            size="small"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            size="small"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Fullname"
            size="small"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <TextField
            label="Username"
            size="small"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Number"
            size="small"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={role}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="ROLE_CUSTOMER"
              control={<Radio />}
              label="Customer"
            />
            <FormControlLabel
              value="ROLE_RESTAURANT_OWNER"
              control={<Radio />}
              label="Restaurant owner"
            />
            <FormControlLabel
              value="ROLE_DELIVERY_PERSON"
              control={<Radio />}
              label="Delivery person"
            />
          </RadioGroup>

          <Box m={1} display="flex" gap={0.5} mt={2}>
            <Typography sx={{ fontSize: "14px" }}>
              Already have an account?
            </Typography>
            <Link to="/">
              <Typography
                color="primary"
                sx={{ fontSize: "14px", color: "#f96d00" }}
              >
                Sign In
              </Typography>
            </Link>
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "#a55233",
              marginTop: "30px",
              textTransform: "none",
              width: "120px",
              "&:hover": {
                backgroundColor: "#a55233",
              },
            }}
            type="submit"
            value="registration"
          >
            Submit
          </Button>
        </form>
      </RegCard>
      <ImBox />
    </Box>
  );
};
export default Registration;
