import axios from "../lib/axios";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        role: response.data.role,
        accessToken: response.data.accessToken,
        name: response.data.name,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
