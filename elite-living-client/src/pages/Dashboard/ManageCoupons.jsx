import Swal from "sweetalert2";
import DashboardPageTitle from "../../components/DashboardPageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCoupons from "../../hooks/useCoupons";

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();
  const [coupons, refetch] = useCoupons();

  const handleCoupon = (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const percentage = form.percentage.value;
    const info = {
      code,
      percentage,
    };
    axiosSecure.post("/coupons", info).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Coupon added",
          icon: "success",
        });
        e.target.reset();
        refetch();
      }
    });
  };

  return (
    <div>
      <DashboardPageTitle heading={"Manage Coupons"}></DashboardPageTitle>
      <h1 className="font-medium text-xl">Available Coupons</h1>
      <div className="flex gap-5 mb-7">{coupons.map(coupon => <>

      <div className="shadow-lg p-5">
        <h1>Coupon code: <span className="text-green-500">{coupon.code}</span></h1>
        <h2>Discounted percentage: <span className="text-green-500">{coupon.percentage}</span> </h2>
      </div>
      
      </>)}</div>

      <h1 className="font-medium text-xl mb-3">Add Coupons</h1>
      <form onSubmit={handleCoupon} className="space-x-2">
        <input
          type="text"
          name="code"
          placeholder="Coupon Code"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          name="percentage"
          placeholder="Percentage"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="text-white shadow-2xl shadow-[#5eac12] pointer px-7 py-2 text-sm font-semibold bg-[#5eac12] hover:text-[#5eac12] hover:border-2 hover:border-[#5eac12] hover:bg-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ManageCoupons;
