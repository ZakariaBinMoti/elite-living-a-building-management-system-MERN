import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAgreementReq = () => {
    const axiosSecure = useAxiosSecure();
    const { data: agreementRequest = [], isLoading , refetch } = useQuery({
      queryKey: ["agreementRequest"],
      queryFn: async () => {
        const res = axiosSecure.get("/agreementRequest");
        return (await res).data;
      },
    });
    return [agreementRequest, isLoading, refetch];
};

export default useAgreementReq;