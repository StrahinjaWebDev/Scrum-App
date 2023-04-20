"use client";
import React from "react";
import { signIn } from "next-auth/react";
const Signin = () => {
  return (
    <div>
      <button onClick={() => signIn("discord")}>Signin</button>
    </div>
  );
};

export default Signin;
