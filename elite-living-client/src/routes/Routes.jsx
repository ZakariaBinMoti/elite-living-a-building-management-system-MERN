import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Apartments from "../pages/Apartments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import PrivateRoutes from "./PrivateRoutes";
import Announcements from "../pages/Dashboard/Announcements";
import MakeAnnouncements from "../pages/Dashboard/MakeAnnouncements";
import ManageCoupons from "../pages/Dashboard/ManageCoupons";
import AgreementReq from "../pages/Dashboard/AgreementReq";
import ManageMembers from "../pages/Dashboard/ManageMembers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartments",
        element: <Apartments></Apartments>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "announcements",
        element: <Announcements></Announcements>,
      },
      {
        path: "make-announcements",
        element: <MakeAnnouncements></MakeAnnouncements>,
      },
      {
        path: "manage-coupons",
        element: <ManageCoupons></ManageCoupons>,
      },
      {
        path: "agreement-request",
        element: <AgreementReq></AgreementReq>,
      },
      {
        path: "manage-members",
        element: <ManageMembers></ManageMembers>,
      },
    ],
  },
]);
