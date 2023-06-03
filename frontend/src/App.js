import "./App.css";
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
