import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
// import Profile from "./components/Profile/Profile";
import Admin from "./components/Admin";
import PaymentForm from "./components/PaymentForm";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RestaurantsPage from "./pages/RestaurantsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <Sidebar />
          <Routes>
            {/* <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registration/>}/> */}
            <Route path="/" element={<Container />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/restaurants" element={<RestaurantsPage/>} />
            <Route path="/pay" element={<PaymentForm></PaymentForm>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
