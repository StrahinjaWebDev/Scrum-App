import { z } from "zod";

export type ApiCreateNewColumnRequest = z.infer<
  typeof apiCreateColumnValidator
>;

export const apiCreateColumnValidator = z.object({
  name: z
    .string()
    .min(4, "Column name cannot be smaller than 2 characters")
    .max(25, "Board name can't be greater than 15 characters"),
  boardId: z.string(),
});
