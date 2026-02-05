import React from "react";
import useRole from "../../hooks/useRole";
import AdminHome from "./AdminHome";
import MentorHome from "./MentorHome";
import StudentHome from "./StudentHome";
import Loading from "../../components/Loading";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  console.log(role);
  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (role === "admin") {
    return <AdminHome />;
  } else if (role === "mentor") {
    return <MentorHome />;
  } else if (role === "student") {
    return <StudentHome />;
  } else {
    return <div>Unauthorized</div>;
  }
};

export default DashboardHome;
