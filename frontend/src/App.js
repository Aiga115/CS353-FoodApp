import "./App.css";
import Container from "./components/container";
import PaymentForm from "./components/PaymentForm";
import Login from "./pages/LoginPage";
import Registration from "./pages/RegistrationPage";
import CustomersRestaurantsPage from "./pages/CustomerRestaurantsPage";
import ReviewPage from "./pages/ReviewPage";
import SidebarLayout from "./layouts/SidebarLayout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from "./pages/AdminPage";
import CustomerProfilePage from "./pages/CustomerProfilePage/CustomerProfilePage";
import RestaurantOwnersRestaurantsPage from "./pages/RestaurantOwnersRestaurantsPage";
import DeliveryPersonPage from "./pages/DeliveryPersonPage/DeliveryPersonPage";

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
              <Route path="/customer-profile" element={<CustomerProfilePage />} />
              <Route path="/customers-restaurants" element={<CustomersRestaurantsPage />} />
              <Route path="/restaurant-owner-restaurants" element={<RestaurantOwnersRestaurantsPage />} />
              <Route path="/pay" element={<PaymentForm></PaymentForm>}></Route>
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/delivery-person-page" element={<DeliveryPersonPage />} />
              <Route path="/admin-page" element={<AdminPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
