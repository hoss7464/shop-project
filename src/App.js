import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Production from "./Pages/ProductionPage"
import AdminDashboard from "./Pages/AdminDashboard";
import UserProfile from "./Pages/UserProfile";
import SignIn from "./Pages/SignInPage"
import SignUp from "./Pages/SignUpPage"
import ForgetPass from "./Pages/ForgetPassPage";
import Purchase from "./Pages/PurchasePage";
import Footer from "./Components/Footer";



function App() {
  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token))
  }
  
  useEffect(() => {
   if (sessionStorage.getItem("token")) {
    let data = JSON.parse(sessionStorage.getItem("token"))
    setToken(data)
   }
  }, [])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/production" element={<Production />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/signin" element={<SignIn setToken={setToken} />} />
          <Route path="/signup" element={<SignUp />} />
          {token ? <Route path="/userprofile" element={<UserProfile setToken={setToken} />} /> : ""}
          <Route path="/forgetpassword" element={<ForgetPass />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
