import React from "react";
import { Button } from "react-bootstrap";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.error("Logout successful.");
  };

  return (
    <>
      <Button variant="warning" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Logout;
