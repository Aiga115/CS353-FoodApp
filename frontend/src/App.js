import "./App.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect, createContext, useContext } from "react";
import Container from "./pages/Container";
import PaymentForm from "./components/PaymentForm";
import Login from "./pages/LoginPage";
import Registration from "./pages/RegistrationPage";
import ReviewPage from "./pages/ReviewPage";
import SidebarLayout from "./layouts/SidebarLayout";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Restaurants from "./pages/Restaurants";
import { Typography } from "@mui/material";

export const stateContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [foodlist, setFoodlist] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get("Food");

  const getUser = async () => {
    const currUser = await axios.get("http://localhost:8080/login/current", {
      headers: {
        Authorization: token,
      },
      withCredentials: true,
    });
    setUser(currUser);
  };
  const getFoodList = async () => {
    const currFoodList = await axios.get(
      "http://localhost:8080/customer/food-list",
      {
        headers: {
          Authorization: token,
        },
        withCredentials: true,
      }
    );
    setFoodlist(currFoodList);
    setIsLoading(false)
  };
  useEffect(() => {
    getUser();
    getFoodList();
  }, []);

  return (
    <stateContext.Provider value={{ user, foodlist }}>
      <div className="App">
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registration />} />

              <Route element={<SidebarLayout />}>
                <Route path="/main" element={<Container />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route
                  path="/pay"
                  element={<PaymentForm></PaymentForm>}
                ></Route>
                <Route path="/review" element={<ReviewPage />} />
              </Route>
            </Routes>
          </Router>
        )}
      </div>
    </stateContext.Provider>
  );
}
export const useStateContext = () => useContext(stateContext);
export default App;
