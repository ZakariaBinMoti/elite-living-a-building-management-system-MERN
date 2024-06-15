import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCoupons = () => {
    const axiosPublic = useAxiosPublic();
    const { data: coupons = [], isLoading ,refetch } = useQuery({
      queryKey: ["coupons"],
      queryFn: async () => {
        const res = axiosPublic.get("/coupons");
        return (await res).data;
      },
    });
    return [coupons, isLoading, refetch];
};

export default useCoupons;