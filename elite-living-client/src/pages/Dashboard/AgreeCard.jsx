import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AgreeCard = ({ agreement }) => {
  const axiosSecure = useAxiosSecure();

  const handleReject = () => {
    axiosSecure.delete(`/agreementRequest/${agreement._id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Checked Successful",
          icon: "success",
        });
      }
    });
  };

  const handleAccept = () => {
    const info = {
      userName: agreement.userName,
      userEmail: agreement.userEmail,
      floorNo: agreement.floorNo,
      rent: agreement.rent,
      status: "checked",
    };
    axiosSecure.post("/rentedapartments", info).then((res) => {
      if (res.data.insertedId) {
        axiosSecure.patch(`/users/${agreement.userEmail}`).then((res) => {
            console.log(res.data);
        }).catch(err => console.log(err))
      }
    });
  };

  return (
    <div className="shadow-lg p-5">
      <p className="font-semibold">{agreement?.userName}</p>
      <p>{agreement?.userEmail}</p>
      <p>Floor No: {agreement?.floorNo}</p>
      <p>Block: {agreement?.blockName}</p>
      <p>Rent: {agreement?.rent}</p>
      <p>
        Status: <span className="text-red-500">{agreement?.status}</span>
      </p>
      <div className="flex mt-3">
        <button onClick={handleAccept} className="btn bg-green-300">
          Accept
        </button>
        <button onClick={handleReject} className="btn bg-red-300">
          Reject
        </button>
      </div>
    </div>
  );
};

export default AgreeCard;
