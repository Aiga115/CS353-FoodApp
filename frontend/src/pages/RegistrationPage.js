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
