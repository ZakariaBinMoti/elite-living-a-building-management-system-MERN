import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import {
  TbCurrencyDollar,
  TbHeart,
  TbPhone,
  TbUser,
  TbWorld,
} from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/apartments">
        <li>Apartments</li>
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
      title: "Want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Logout Successful",
              icon: "success",
            });
          })
          .catch();
      }
    });
  };

  return (
    <nav className="">
      {/* upper nav */}
      <div className="flex space-y-4 lg:space-y-0 py-4 items-center justify-between max-w-7xl mx-auto ">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <label className=" bg-[#f8f9f9] px-5 rounded-none flex items-center gap-2">
          <div className="pr-8">
            <select className="bg-[#f8f9f9] text-sm focus:outline-none">
              <option>Apartment</option>
              <option>Floor</option>
              <option>Block Name</option>
            </select>
          </div>
          <input
            type="text"
            className="grow py-3 lg:pr-80 bg-[#f8f9f9] text-sm focus:outline-none"
            placeholder="Search your apartment........"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="flex items-center gap-3">
          <TbWorld />
          <TbHeart></TbHeart>
          <TbCurrencyDollar />
          {!user ? (
            <>
              <Link to="/login">
                <TbUser></TbUser>
              </Link>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li className="ml-3">{user?.displayName}</li>
                  <Link to="dashboard">
                    {" "}
                    <li>
                      <a>Dashboard</a>
                    </li>
                  </Link>
                  <li onClick={handleSignOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      {/* bottom nav */}
      <div className="bg-[#586167]">
        <div className="navbar p-0 m-0 max-w-7xl mx-auto">
          <div className="navbar-start m-0 p-0">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu m-0 p-0 menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <ul className="menu m-0 gap-4 text-base font-medium hidden lg:flex p-0 menu-horizontal text-white">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-center m-0 p-0  hidden lg:flex"></div>
          <div className="navbar-end m-0 p-0 text-white gap-3">
            <div className="bg-[#5eac12] p-1">
              {" "}
              <TbPhone className="text-2xl"></TbPhone>
            </div>
            (880)-123 789 / (800)- 561 456
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
