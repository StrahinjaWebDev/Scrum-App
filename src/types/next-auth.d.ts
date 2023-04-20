import { UserRole, UserType } from "@prisma/client";
import type { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    type: UserType;
    role: UserRole;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      type: UserType;
      role: UserRole;
    } & DefaultSession["user"];
  }
}
