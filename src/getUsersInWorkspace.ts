import axios from "axios";
import { getBaseUrl } from "./lib/getBaseUrl";

export const getUsersInWorkspace = async (workspaceId: string) => {
  const baseUrl = getBaseUrl();

  const user = await axios.get(`${baseUrl}/api/getUsersInWorkspace`, {
    params: {
      workspaceId: workspaceId,
    },
  });
  return user.data;
};
