import axios from "axios";
import { getBaseUrl } from "./lib/getBaseUrl";

export const getIssues = async (columnId: string) => {
  const baseUrl = getBaseUrl();
  const issues = await axios.get(`${baseUrl}/api/getIssues`, {
    params: {
      columnId: columnId,
    },
  });
  return issues.data;
};
