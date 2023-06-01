import React from "react";
import Signin from "@/Signin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SessionProvider } from "next-auth/react";

const SignInPage = async () => {
  return <Signin />;
};

export default SignInPage;
