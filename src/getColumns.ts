import axios from "axios";
import { getBaseUrl } from "./lib/getBaseUrl";

export const getColumns = async (boardId: string) => {
  const baseUrl = getBaseUrl();
  const columns = await axios.get(`${baseUrl}/api/getColumns`, {
    params: {
      id: boardId,
    },
  });
  return columns.data;
};
