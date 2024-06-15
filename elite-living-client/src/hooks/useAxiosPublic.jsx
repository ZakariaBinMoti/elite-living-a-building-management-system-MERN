import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://elite-living-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
