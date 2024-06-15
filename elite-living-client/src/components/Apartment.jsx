import { FaHome, FaHouseUser } from "react-icons/fa";
import { GiStoneBlock } from "react-icons/gi";
import "./style.css";
import { FaArrowUp19 } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Apartment = ({ apartment }) => {
  const { image, floorNo, blockName, apartmentNo, rent } = apartment;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleAgreement = () => {
    if (!user) {
      navigate("/login");
    } else {
      const agreementInfo = {
        userName: user.displayName,
        userEmail: user.email,
        floorNo,
        blockName,
        apartmentNo,
        rent,
        status: "pending",
      };
      console.log(agreementInfo);
      axiosSecure
        .post("/agreementRequest", agreementInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Agreement Request Send Successful",
              icon: "success",
            });
          }
          if(res.data === 'You have already booked an apartment'){
            Swal.fire({
              title: "Error!",
              text: "You have already booked an apartment",
              icon: "error",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="rent-container" className="shadow-md">
      <div className="relative">
        <img src={image} alt="" />
        <p
          id="rent"
          className="absolute px-5 py-2 text-[#5eac12] text-base font-bold top-5 right-5 bg-white"
        >
          ${rent}.00
        </p>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2">
          <p className="flex items-center ">
            <span className="text-[#5eac12] bg-[#eef6e7] rounded-full p-2 mr-2">
              <FaArrowUp19 />
            </span>
            <span>{floorNo} Floor</span>
          </p>
          <p className="flex items-center ">
            <span className="text-[#5eac12] bg-[#eef6e7] rounded-full p-2 mr-2">
              <GiStoneBlock />
            </span>
            <span>Block: {blockName}</span>
          </p>
        </div>
        <div className="grid grid-cols-2">
          <p className="flex items-center ">
            <span className="text-[#5eac12] bg-[#eef6e7] rounded-full p-2 mr-2">
              <FaHome />
            </span>
            <span>Apartment No: {apartmentNo}</span>
          </p>
          <p className="flex items-center ">
            <span className="text-[#5eac12] bg-[#eef6e7] rounded-full p-2 mr-2">
              <FaHouseUser />
            </span>
            <span>3 Rooms</span>
          </p>
        </div>
        <div>
          <button
            id="btn"
            onClick={handleAgreement}
            className="bg-[#eef6e7] hover:bg-white text-[#5eac12]  font-semibold text-sm py-2 px-5"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
