"use client";
import React from "react";
import { signIn } from "next-auth/react";
const Signin = () => {
  return (
    <div>
      <button onClick={() => signIn("github")}>Signin</button>
    </div>
  );
};

export default Signin;
