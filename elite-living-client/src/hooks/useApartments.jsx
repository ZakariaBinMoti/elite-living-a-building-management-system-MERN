import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useApartments = () => {
  const axiosPublic = useAxiosPublic();

  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = axiosPublic.get("/apartments");
      return (await res).data;
    },
  });
  return [apartments, isLoading];
};

export default useApartments;
