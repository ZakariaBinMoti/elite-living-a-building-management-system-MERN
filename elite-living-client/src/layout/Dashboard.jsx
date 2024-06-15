import { Outlet } from "react-router-dom";
import DashboardUpperNav from "../pages/Shared/DashboardUpperNav";
import DashboardNavbar from "../pages/Shared/DashboardNavbar";
// import DashboardNavbar from "../pages/Shared/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* side nav  */}
      <DashboardNavbar></DashboardNavbar>
      <div className="grow">
        <div className="shadow-sm">
          <DashboardUpperNav></DashboardUpperNav>
        </div>
        <div className="px-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
