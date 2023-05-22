import "./App.css";
import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Admin from "./components/Admin";
import PaymentForm from "./components/PaymentForm";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RestaurantsPage from "./pages/RestaurantsPage";
import ReviewPage from "./pages/ReviewPage";
import SidebarLayout from "./layouts/SidebarLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantOwnerProfilePage from "./pages/RestaurantOwnerProfilePage/RestaurantOwnerProfilePage";

function App() {
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
              <Route path="/admin" element={<Admin />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/pay" element={<PaymentForm></PaymentForm>}></Route>
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/RestaurantOwnerProfilePage" element={<RestaurantOwnerProfilePage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
