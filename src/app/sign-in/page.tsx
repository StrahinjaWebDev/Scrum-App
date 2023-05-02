import React from "react";
import Signin from "@/Signin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const SignInPage = async () => {
  return <Signin />;
};

export default SignInPage;
