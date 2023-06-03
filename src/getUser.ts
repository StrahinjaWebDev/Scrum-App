import axios from "axios";

export const getUser = async (userId: string) => {
  const user = await axios.get("http://localhost:3000/api/getUser", {
    id: userId,
  });
  return user.data;
};