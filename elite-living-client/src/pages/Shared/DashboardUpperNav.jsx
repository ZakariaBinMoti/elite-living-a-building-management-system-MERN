import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardUpperNav = () => {
  const { user, logOut } = useContext(AuthContext);
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
    <div className="flex justify-center gap-5 py-5">
      <div>
        <label className=" bg-[#f8f9f9] px-5 rounded-none flex items-center gap-2">
          <input
            type="text"
            className="grow py-3 lg:pr-80 bg-[#f8f9f9] text-sm focus:outline-none"
            placeholder="Search here"
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
      </div>

      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="avatar">
            <div className="w-8 rounded">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 w-40"
        >
          <li className="ml-3">{user?.displayName}</li>
          <Link to="/">
            {" "}
            <li>
              <a>Home</a>
            </li>
          </Link>
          <li onClick={handleSignOut}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardUpperNav;
