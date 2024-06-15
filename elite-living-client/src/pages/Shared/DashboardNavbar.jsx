import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, NavLink } from "react-router-dom";
import { FaBookReader, FaCashRegister, FaHistory, FaMicrophone, FaPen, FaUsers } from "react-icons/fa";
import logo from "../../assets/Logo.svg";
import useUserRole from "../../hooks/useUserRole";

const DashboardNavbar = () => {
    const { user } = useContext(AuthContext);
    const [userRole] = useUserRole();
    console.log(userRole?.member);
  const userNavlinks = (
    <>
      <NavLink to="">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8"> <FaBookReader></FaBookReader> My Profile</li>
      </NavLink>
      <NavLink to="announcements">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaMicrophone></FaMicrophone> Announcements</li>
      </NavLink>
    </>
  );
  const memberNavlinks = (
    <>
      <NavLink to="">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8"> <FaBookReader></FaBookReader> My Profile</li>
      </NavLink>
      <NavLink to="make-payments">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaCashRegister></FaCashRegister> Make Payments</li>
      </NavLink>
      <NavLink to="payment-history">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaHistory></FaHistory> Payment History</li>
      </NavLink>
      <NavLink to="announcements">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaMicrophone></FaMicrophone> Announcements</li>
      </NavLink>
    </>
  );
  const adminNavlinks = (
    <>
      <NavLink to="">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8"> <FaBookReader></FaBookReader> My Profile</li>
      </NavLink>
      <NavLink to="manage-members">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaUsers></FaUsers> Manage Members</li>
      </NavLink>
      <NavLink to="make-announcements">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaMicrophone></FaMicrophone> Make Announcements</li>
      </NavLink>
      <NavLink to="agreement-request">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaPen></FaPen> Agreement Request</li>
      </NavLink>
      <NavLink to="manage-coupons">
        <li className="text-sm ml-1 flex items-center pl-5 gap-3 font-medium hover:text-[#5eac12] hover:bg-[#eef6e7] hover:border-[#5eac12] border-white py-4 border-l-8">  <FaMicrophone></FaMicrophone> Manage Coupons</li>
      </NavLink>
    </>
  );
    return (
        <div className="min-h-screen shadow-xl">

        <Link to="/">
          <img className="py-6 ml-12" src={logo} alt="" />
        </Link>

      <div className="flex items-center gap-5 p-5 bg-[#f7f7f7]">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold">{user?.displayName}</h3>
          <p className="text-sm font-normal">{user?.email}</p>
        </div>
      </div>
      <ul className="mt-3"> { userRole?.user && userNavlinks} {userRole?.member && memberNavlinks}  {userRole?.admin && adminNavlinks}</ul>
    </div>
    );
};

export default DashboardNavbar;