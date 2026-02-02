import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import MentorList from "../pages/MentorList";
import About from "../pages/Home/About";
import Contact from "../pages/Contact";
import BeMentor from "../pages/BeMentor";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";

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
]);
