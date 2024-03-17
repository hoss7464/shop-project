import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/index";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Production from "./Pages/ProductionPage";
import AdminDashboard from "./Pages/AdminDashboard";
import UserProfile from "./Pages/UserProfile";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";
import ForgetPass from "./Pages/ForgetPassPage";
import ResetPass from "./Pages/ResetPassword";
import Purchase from "./Pages/PurchasePage";
import Footer from "./Components/Footer";
import ScrollToTop from "./Core-UI/ScrollToTop";
import ProductDetails from "./Pages/ProductDetailsPage";
import UserOrders from "./Pages/UserProfile/UserPages/UserOrdersPage/index"
import UserComments from "./Pages/UserProfile/UserPages/UserCommentsPage/index"
import UserAddress from "./Pages/UserProfile/UserPages/UserAddressPage/index"
import UserServices from "./Pages/UserProfile/UserPages/UserServicesPage/index"
import UserAccount from "./Pages/UserProfile/UserPages/UserAccountPage/index"

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
      console.log(data)
    }
    
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/production" element={<Production />} />
          <Route path="/production/:productId" element={<ProductDetails />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/productdetails/:productId" element={<ProductDetails />}/>
          <Route path="/admindashboard" element={<AdminDashboard setToken={setToken} />} />
          <Route path="/signin" element={<SignIn setToken={setToken} />} />
          <Route path="/signup" element={<SignUp />} />
           
           {token ? (
            <Route path="/userprofile" element={<UserProfile setToken={setToken} />}>
            <Route path="userorders" element={<UserOrders />} />
            <Route path="usercomments" element={<UserComments />} />
            <Route path="useraddress" element={<UserAddress />} />
            <Route path="userservices" element={<UserServices />} />
            <Route path="useraccount" element={<UserAccount />} />
          </Route>
           ) : ("")}
          

          <Route path="/forgetpassword" element={<ForgetPass />} />
          <Route path="/resetPass" element={<ResetPass />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
