import React from "react";
import useRole from "../hooks/useRole";
import Loading from "../components/Loading";

const MentorRoute = ({ children }) => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading />;
  }
  if (role !== "mentor") {
    return <div>You are not authorized to access this page.</div>;
  }
  return children;
};

export default MentorRoute;
