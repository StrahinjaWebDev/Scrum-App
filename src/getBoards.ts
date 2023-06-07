import axios from "axios";
import { getBaseUrl } from "./lib/getBaseUrl";

export const getBoards = async (workspaceId: string) => {
  const baseUrl = getBaseUrl();
  const boards = await axios.get(`${baseUrl}/api/getBoards`, {
    params: {
      id: workspaceId,
    },
  });
  return boards.data;
};
