import React from "react";
import { AdminContainer } from "./AdminElements";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ token }) => {
    const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/signin");
  }
  return (
    <>
      <AdminContainer>
        Hello Admin
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "khaki",
            padding: "1rem 2rem",
            marginTop: "1rem",
          }}
        >
          خروج
        </button>
      </AdminContainer>
    </>
  );
};

export default AdminDashboard;
