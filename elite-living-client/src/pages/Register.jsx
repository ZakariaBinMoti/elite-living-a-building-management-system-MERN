import { TbLock, TbMail, TbPhoto, TbUser } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/login.jpg";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile, setUser, user } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log(name, email, photo, password);

    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password must be at least 6 characters long.",
        icon: "error",
      });
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one uppercase letter.",
        icon: "error",
      });
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one lowercase letter.",
        icon: "error",
      });
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?/\\]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one special character.",
        icon: "error",
      });
    } else {
      createUser(email, password)
        .then((result) => {
          // console.log(result.user);
          if (result.user) {
            updateUserProfile(name, photo)
              .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo, email: email });
                const userInfo = {
                  name,
                  email,
                  role: 'user'
                };
                axiosPublic.post("/users", userInfo).then((res) => {
                  console.log(res.data);
                  if (res.data.insertedId) {
                    Swal.fire({
                      title: "Success!",
                      text: "Registration Successful",
                      icon: "success",
                    }).then(() => {
                      navigate(location?.state ? location.state : "/");
                    });
                  }
                });
              })
              .catch((error) => {
                console.error(error);
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
          }
        })
        .catch((error) => {
          console.error(error);
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
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 mt-12 shadow-md mx-auto">
        <img src={img} alt="" />
        <div className="py-10 px-12">
          <div className="flex justify-end">
            <Link to="/login">
              <button className="text-[#5eac12] shadow-2xl border pointer px-4 py-2 text-sm font-semibold">
                Login
              </button>
            </Link>
            <Link>
              <button className=" text-white shadow-2xl pointer px-4 py-2 text-sm font-semibold bg-[#5eac12]">
                Register
              </button>
            </Link>
          </div>
          <h3 className="text-2xl font-semibold mb-5">Register</h3>
          <form className="space-y-5" onSubmit={handleRegister}>
            <div className="flex items-center">
              <TbUser></TbUser>
              <input
                type="name"
                className="py-2 px-3 focus:outline-none border-b w-full"
                name="name"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex items-center">
              <TbPhoto></TbPhoto>
              <input
                type="photo"
                className="py-2 px-3 focus:outline-none border-b w-full"
                name="photo"
                placeholder="Photo URL"
              />
            </div>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
