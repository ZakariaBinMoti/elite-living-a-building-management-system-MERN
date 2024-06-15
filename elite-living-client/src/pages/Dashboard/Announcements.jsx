import { useQuery } from "@tanstack/react-query";
import DashboardPageTitle from "../../components/DashboardPageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
  const axiosSecure = useAxiosSecure();

  const { data: announcements = [] } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = axiosSecure.get("/announcements");
      return (await res).data;
    },
  });

  return (
    <div>
      <DashboardPageTitle
        heading={"Announcements"}
        subheading={"User"}
      ></DashboardPageTitle>
      <div className="space-y-3">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement._id}
            announcement={announcement}
          ></AnnouncementCard>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
