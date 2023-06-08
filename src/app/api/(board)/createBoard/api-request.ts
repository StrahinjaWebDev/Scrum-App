import { z } from "zod";

export type ApiCreateNewBoardRequest = z.infer<typeof apiCreateBoardValidator>;

export const apiCreateBoardValidator = z.object({
  name: z
    .string()
    .min(4, "Board name cannot be smaller than 4 characters")
    .max(20, "Board name can't be greater than 15 characters"),
  workspaceId: z.string(),
});
