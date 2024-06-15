import DashboardPageTitle from "../../components/DashboardPageTitle";
import useUserRole from "../../hooks/useUserRole";

const DashboardHome = () => {
  const [userRole] = useUserRole();
  if (userRole?.user) {
    return (
      <div>
        <DashboardPageTitle
          heading={"My Profile"}
        ></DashboardPageTitle>
        <div className="shadow-lg p-7">
        <h3 className="font-medium">Agreement Accept Date: None</h3>
            <h3><span className="font-medium">Rented apartment info:</span> <span className="text-red-600">You dont have any rented apartment</span></h3>

        </div>
      </div>
    );
  }
  if (userRole?.member) {
    return (
      <div>
        <DashboardPageTitle
          heading={"My Profile"}
        ></DashboardPageTitle>
        <div className="shadow-lg p-7">
        <h3 className="font-medium">Agreement Accept Date: None</h3>
            <h3><span className="font-medium">Rented apartment info:</span> <span className="text-red-600">You dont have any rented apartment</span></h3>

        </div>
      </div>
    );
  }
  if (userRole?.admin) {
    return (
      <div>
        <DashboardPageTitle
          heading={"My Profile"}
        ></DashboardPageTitle>
        <div className="shadow-lg p-7">
        <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Total Members</div>
    <div className="stat-value">2</div>
    <div className="stat-desc"></div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Total Users</div>
    <div className="stat-value">4</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Available Apartments</div>
    <div className="stat-value">36</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>

        </div>
      </div>
    );
  }
};

export default DashboardHome;
