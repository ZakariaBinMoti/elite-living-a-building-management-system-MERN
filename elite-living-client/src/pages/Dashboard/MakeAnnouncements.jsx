import Swal from "sweetalert2";
import DashboardPageTitle from "../../components/DashboardPageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MakeAnnouncements = () => {
  const axiosSecure = useAxiosSecure();

  const handleAnnouncements = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const formInfo = {
      title,
      description,
    };
    axiosSecure.post("/announcements", formInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Login Successful",
          icon: "success",
        });
        e.target.reset();
      }
    })
    .catch(err =>{
        console.log(err);
    })
  };

  return (
    <div>
      <DashboardPageTitle
        heading={"Make Annoucements"}
        subheading={"Admin"}
      ></DashboardPageTitle>
      <div>
        <form
          onSubmit={handleAnnouncements}
          className="shadow-xl p-5 space-y-4"
        >
          <div className="flex items-center">
            <input
              type="text"
              className="py-2 px-3 shadow-md focus:outline-none border w-full"
              name="title"
              placeholder="Write a title"
            />
          </div>
          <div className="flex items-center">
            <textarea
              name="description"
              id="description"
              placeholder="Write desciption........"
              cols="30"
              rows="10"
              className="py-2 px-3 focus:outline-none border-b w-full"
            ></textarea>
          </div>
          <button className="text-white shadow-2xl shadow-[#5eac12] pointer px-7 py-2 text-sm font-semibold bg-[#5eac12] hover:text-[#5eac12] hover:border-2 hover:border-[#5eac12] hover:bg-white">
            Announce
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncements;
