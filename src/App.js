import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import Production from "./Pages/ProductionPage"
import AdminDashboard from "./Pages/AdminDashboard";
import UserProfile from "./Pages/UserProfile";
import SignIn from "./Pages/SignInPage"
import SignUp from "./Pages/SignUpPage"
import ForgetPass from "./Pages/ForgetPassPage";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/production" element={<Production />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPass />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
