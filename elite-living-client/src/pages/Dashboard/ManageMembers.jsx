import DashboardPageTitle from "../../components/DashboardPageTitle";
import useUsers from "../../hooks/useUsers";

const ManageMembers = () => {
  const [users] = useUsers();
  return (
    <div>
      <DashboardPageTitle heading={"Manage Members"}></DashboardPageTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <>
                  <tr>
                    <th>{user.name}</th>
                    <td>{user.email}</td>
                    <td><button className="bg-red-500 px-4 py-2 text-white">Remove</button></td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMembers;
