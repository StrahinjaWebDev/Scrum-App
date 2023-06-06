import { z } from "zod";

export type ApiCreateNewWorkspaceRequest = z.infer<
  typeof apiCreateWorkspaceValidator
>;

export const apiCreateWorkspaceValidator = z.object({
  name: z
    .string()
    .min(4, "Workspace can't be smaller than 4 characters")
    .max(20, "Workspace can't be greater than 20 characters"),
  userId: z.string(),
});

export const apiResponseValidator = z.object({
  erorr: z.string().optional(),
  data: z.string().optional(),
});
