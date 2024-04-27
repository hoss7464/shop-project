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
import AdminClientAuthPage from "./Pages/AdminDashboard/AdminPages/AdminClientAuthPage/index"
import AdminClientInfoPage from "./Pages/AdminDashboard/AdminPages/AdminClientInfoPage/index"
import AdminHomePage from "./Pages/AdminDashboard/AdminPages/AdminHomePage/index"
import AdminPortPage from "./Pages/AdminDashboard/AdminPages/AdminPortPage/index"
import AdminProductPage from "./Pages/AdminDashboard/AdminPages/AdminProductPage/index"
import AdminServicePage from "./Pages/AdminDashboard/AdminPages/AdminServicePage/index"
import AdminTransactionPage from "./Pages/AdminDashboard/AdminPages/AdminTransactionPage/index"

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
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
          <Route path="/signin" element={<SignIn setToken={setToken} />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route path="/admindashboard" element={<AdminDashboard setToken={setToken} />}>
            <Route path="adminhome" element={<AdminHomePage />} />
            <Route path="adminclientinfo" element={<AdminClientInfoPage />} />
            <Route path="adminclientauth" element={<AdminClientAuthPage />} />
            <Route path="adminproduct" element={<AdminProductPage />} />
            <Route path="admintransaction" element={<AdminTransactionPage />} />
            <Route path="adminport" element={<AdminPortPage />} />
            <Route path="adminservice" element={<AdminServicePage />} /> 
          </Route>
           
          <Route path="/userprofile" element={<UserProfile setToken={setToken} />}>
            <Route path="userorders" element={<UserOrders />} />
            <Route path="usercomments" element={<UserComments />} />
            <Route path="useraddress" element={<UserAddress />} />
            <Route path="userservices" element={<UserServices />} />
            <Route path="useraccount" element={<UserAccount />} />
          </Route> 
          
           
          

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
