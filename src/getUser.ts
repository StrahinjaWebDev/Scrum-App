import axios from "axios";
import { getBaseUrl } from "./lib/getBaseUrl";

export const getUser = async (userId: string) => {
  const baseUrl = getBaseUrl();
  const user = await axios.get(`${baseUrl}/api/getUser`, {
    params: {
      id: userId,
    },
  });
  return user.data;
};
