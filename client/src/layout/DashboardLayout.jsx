import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
