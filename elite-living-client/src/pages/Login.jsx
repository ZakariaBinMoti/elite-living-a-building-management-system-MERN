import { TbLock, TbMail } from "react-icons/tb";
import img from "../assets/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const { signIn, googleLogIn, githubLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        // console.log(result);
        if (result.user) {
          Swal.fire({
            title: "Success!",
            text: "Login Successful",
            icon: "success",
          }).then(() => {
            navigate(location?.state ? location.state : "/");
          });
        }
      })
      .catch((error) => {
        if (error.code && error.code.startsWith("auth/")) {
          // Extract and display the error message
          Swal.fire({
            title: "Error!",
            text: `${error.message}`,
            icon: "error",
          });
        } else {
          // If it's not a Firebase error, you can display the error object
          Swal.fire({
            title: "Error!",
            text: `${error}`,
            icon: "error",
          });
        }
      });
  };

  const from = location?.state || "/";
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        if (result.user) {
          const userInfo = {
            name: result.user.displayName,
            email: result.user.email,
            role: 'user'
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            navigate(from);
          });
        }
      })
      .catch((error) => {
        if (error.code && error.code.startsWith("auth/")) {
          // Extract and display the error message
          Swal.fire({
            title: "Error!",
            text: `${error.message}`,
            icon: "error",
          });
        } else {
          // If it's not a Firebase error, you can display the error object
          Swal.fire({
            title: "Error!",
            text: `${error}`,
            icon: "error",
          });
        }
      });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 mt-12 shadow-md mx-auto">
        <img src={img} alt="" />
        <div className="py-10 px-12">
          <div className="flex justify-end">
            <Link>
              <button className="text-white shadow-2xl pointer px-4 py-2 text-sm font-semibold bg-[#5eac12]">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="text-[#5eac12] shadow-2xl border pointer px-4 py-2 text-sm font-semibold">
                Register
              </button>
            </Link>
          </div>
          <h3 className="text-2xl font-semibold mb-5">Login</h3>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="flex items-center">
              <TbMail></TbMail>
              <input
                type="email"
                className="py-2 px-3 focus:outline-none border-b w-full"
                name="email"
                placeholder="Enter Email"
              />
            </div>

            <div className="flex items-center">
              <TbLock></TbLock>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="py-2 focus:outline-none px-3 border-b w-full"
              />
            </div>

            <button className="text-white shadow-2xl shadow-[#5eac12] pointer px-7 py-2 text-sm font-semibold bg-[#5eac12] hover:text-[#5eac12] hover:border-2 hover:border-[#5eac12] hover:bg-white">
              Login
            </button>
          </form>
          <div>
            <div className="grid grid-cols-2 mt-5 gap-2">
              <button
                onClick={() => handleSocialLogin(googleLogIn)}
                className="btn w-full border border-gray-500 shadow-md"
              >
                {" "}
                <FaGoogle></FaGoogle> Google
              </button>
              <button
                onClick={() => handleSocialLogin(githubLogIn)}
                className="btn w-full border-gray-500 shadow-md"
              >
                {" "}
                <FaGithub></FaGithub> Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
