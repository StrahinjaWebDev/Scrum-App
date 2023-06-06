import { z } from "zod";

export const apiCreateWorkspaceValidator = z.object({
  name: z.string(),
  userId: z.string(),
});

export type ApiCreateNewWorkspaceRequest = z.infer<
  typeof apiCreateWorkspaceValidator
>;

export const apiResponseValidator = z.object({
  erorr: z.string().optional(),
  data: z.string().optional(),
});
