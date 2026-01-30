import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import MentorList from "../pages/MentorList";
import About from "../pages/Home/About";
import Contact from "../pages/Contact";
import BeMentor from "../pages/BeMentor";

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
      { path: "be-a-mentor", element: <BeMentor /> },
    ],
  },
]);
