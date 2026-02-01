import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleSignIn = () => {
  const handleSubmit = () => {
    console.log("google sign in");
  };
  return (
    <button className="btn mt-3 btn-outline btn-accent" onClick={handleSubmit}>
      <FaGoogle /> Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
