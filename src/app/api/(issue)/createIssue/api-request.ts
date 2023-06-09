import { z } from "zod";

export type ApiCreateNewIssueRequest = z.infer<typeof apiCreateIssueValidator>;

export const apiCreateIssueValidator = z.object({
  name: z
    .string()
    .min(2, "Workspace can't be smaller than 2 characters")
    .max(20, "Workspace can't be greater than 20 characters"),
  description: z.string().min(1, "Description can't be empty!"),
  columnId: z.string(),
});
