import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import MentorList from "../pages/MentorList";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BeMentor from "../pages/BeMentor";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import MentorDetails from "../components/MentorDetails";
import DashboardHome from "../dashboard/home/DashboardHome";
import DashboardLayout from "../layout/DashboardLayout";
import BookingRequest from "../dashboard/mentor/BookingRequest";
import ManageSlots from "../dashboard/mentor/ManageSlots";
import Payouts from "../dashboard/mentor/Payouts";
import MyBooking from "../dashboard/student/MyBooking";
import PaymentHistory from "../dashboard/student/PaymentHistory";
import UserManagement from "../dashboard/admin/UserManagement";
import MentorApproval from "../dashboard/admin/MentorApproval";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "mentors",
        element: <MentorList />,
      },
      {
        path: "/mentor/:id",
        element: (
          <PrivateRoute>
            <MentorDetails />
          </PrivateRoute>
        ),
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "be-a-mentor",
        element: (
          <PrivateRoute>
            <BeMentor />
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "my-bookings",
        element: <MyBooking />,
      },
      { path: "payment-history", element: <PaymentHistory /> },
      { path: "booking-requests", element: <BookingRequest /> },
      { path: "manage-slots", element: <ManageSlots /> },
      { path: "payouts", element: <Payouts /> },
      { path: "user-management", element: <UserManagement /> },
      { path: "mentor-approvals", element: <MentorApproval /> },
      {
        path: "profile",
        element: <div>Profile Settings</div>,
      },
    ],
  },
]);
