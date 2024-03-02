import React from "react";
import { UserContainer } from "./UserProfileElements";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ token }) => {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <UserContainer>
        <h1>Hello User</h1>
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
      </UserContainer>
    </>
  );
};

export default UserProfile;
