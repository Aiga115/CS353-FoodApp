import "./App.css";
import axios from "axios"
import Cookies from "js-cookie";
import { useState, useEffect, createContext, useContext } from "react";
import Container from "./pages/Container";
import PaymentForm from "./components/PaymentForm";
import Login from "./pages/LoginPage";
import Registration from "./pages/RegistrationPage";
import ReviewPage from "./pages/ReviewPage";
import SidebarLayout from "./layouts/SidebarLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile/Profile"
import Restaurants from "./pages/Restaurants";

function App() {
  const [user, setUser] = useState();
  // const user = localStorage.getItem('currUser')
  // console.log("user: ", user)
  const token = Cookies.get('Food')
  console.log('token: ', token)
  const getUser = async () =>{
    const {currUser} = await axios.get('http://localhost:8080/login/current/',{
      headers:{
        'Authorization': 'Food eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMUBnbWFpbC5jb20iLCJpYXQiOjE2ODU5MTIxOTEsImV4cCI6MTY4NTk5ODU5MX0.XTqbvn-7XfCoNV9wxlr3mLn982k9WCw-lN_i7X1vlo12jMsH-bOnSPfrts6BPRlP7808HSzncNgPmtNrTC_jxQ'
      }
    })
    setUser(currUser);
    console.log("user: ", currUser)
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registration />} />

            <Route element={<SidebarLayout/>}>
              <Route path="/main" element={<Container />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/pay" element={<PaymentForm></PaymentForm>}></Route>
              <Route path="/review" element={<ReviewPage />} />
            </Route>

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
