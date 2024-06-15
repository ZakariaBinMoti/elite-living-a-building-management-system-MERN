import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useUserRole = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: userRole} = useQuery({
        queryKey: [user?.email,'userRole'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/role/${user.email}`);
            console.log(res.data);
            return res.data;
        }
    })
    return [userRole];
};

export default useUserRole;