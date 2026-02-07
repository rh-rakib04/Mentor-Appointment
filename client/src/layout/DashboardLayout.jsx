import React, { useState } from "react";
import { Outlet, NavLink } from "react-router";
import {
  LayoutDashboard,
  User,
  Calendar,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Logo from "../components/Logo";

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { signOutUser, user } = useAuth();
  const { role } = useRole();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // Link styling for active state
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
      isActive
        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0 lg:static
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="mb-4">
            <Logo></Logo>
          </div>

          <nav className="flex-1 space-y-2">
            <NavLink to="/dashboard" end className={linkClasses}>
              <LayoutDashboard size={20} /> Overview
            </NavLink>

            {/* student */}
            {role === "student" && (
              <>
                <NavLink to="/dashboard/my-bookings" className={linkClasses}>
                  <Calendar size={20} /> My Sessions
                </NavLink>
                <NavLink
                  to="/dashboard/payment-history"
                  className={linkClasses}
                >
                  <Calendar size={20} /> Payment History
                </NavLink>
              </>
            )}
            {/* mentor */}
            {role === "mentor" && (
              <>
                <NavLink
                  to="/dashboard/booking-requests"
                  className={linkClasses}
                >
                  <Calendar size={20} /> Booking Request
                </NavLink>
                <NavLink to="/dashboard/manage-slots" className={linkClasses}>
                  <Calendar size={20} /> Manage Slots
                </NavLink>
                <NavLink to="/dashboard/payouts" className={linkClasses}>
                  <Calendar size={20} /> Payouts
                </NavLink>
              </>
            )}
            {/* admin */}
            {role === "admin" && (
              <>
                <NavLink
                  to="/dashboard/user-management"
                  className={linkClasses}
                >
                  <Calendar size={20} /> User Management
                </NavLink>
                <NavLink
                  to="/dashboard/mentor-approvals"
                  className={linkClasses}
                >
                  <Calendar size={20} /> Mentor Approvals
                </NavLink>
              </>
            )}
            <NavLink to="/dashboard/profile" className={linkClasses}>
              <User size={20} /> My Profile
            </NavLink>
          </nav>

          <div className="pt-6 border-t border-slate-100">
            <button
              onClick={signOutUser}
              className="flex items-center gap-3 px-4 py-3 w-full text-rose-500 hover:bg-rose-50 rounded-xl transition-all font-bold"
            >
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* DASHBOARD NAVBAR (Internal) */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-10">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-slate-600"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest ">
              {user?.displayName}'s Dashboard
            </span>
            {/* <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
              {role?.charAt(0).toUpperCase()}
            </div> */}
          </div>
        </header>

        {/* OUTLET FOR CHILDREN */}
        <main className="p-6 lg:p-10 max-w-7xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
