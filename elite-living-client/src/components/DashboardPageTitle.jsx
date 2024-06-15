import useUserRole from "../hooks/useUserRole";

const DashboardPageTitle = ({ heading }) => {
  const [userRole] = useUserRole();
  return (
    <div className="py-8 space-y-1">
      <h1 className="text-3xl font-semibold">{heading}</h1>
      <p>
        Welcome to
        {userRole?.member && (
          <span className="text-[#5eac12] px-1 font-bold">Member</span>
        )}
        {userRole?.user && (
          <span className="text-[#5eac12] px-1 font-bold">User</span>
        )}
        {userRole?.admin && (
          <span className="text-[#5eac12] px-1 font-bold">Admin</span>
        )}
        Panel
      </p>
    </div>
  );
};

export default DashboardPageTitle;
