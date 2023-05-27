import "./App.css";
import Container from "./components/Container/Container";
import Admin from "./components/Admin";
import PaymentForm from "./components/PaymentForm";
import Login from "./pages/LoginPage";
import Registration from "./pages/RegistrationPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import ReviewPage from "./pages/ReviewPage";
import SidebarLayout from "./layouts/SidebarLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantOwnerProfilePage from "./pages/RestaurantOwnerProfilePage/RestaurantOwnerProfilePage";
import DeliveryPersonPage from "./pages/DeliveryPersonPage";
import CustomerProfilePage from "./pages/CustomerProfilePage/CustomerProfilePage";

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
              <Route path="/CustomerProfilePage" element={<CustomerProfilePage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/pay" element={<PaymentForm></PaymentForm>}></Route>
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/RestaurantOwnerProfilePage" element={<RestaurantOwnerProfilePage />} />
              <Route path="/DeliveryPersonPage" element={<DeliveryPersonPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
