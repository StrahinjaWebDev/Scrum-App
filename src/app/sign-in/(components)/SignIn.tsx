"use client";

import React from "react";
import { signIn } from "next-auth/react";
import {
  DiscordIcon,
  GithubIcon,
  GoogleIcon,
} from "../../../../public/svgs/Svgs";

const SignIn = () => {
  return (
    <ul className="-mx-2 mb-12 flex justify-between">
      <li className="w-full px-2">
        <button
          onClick={() => signIn("github")}
          className="flex h-11 items-center justify-center rounded-md bg-gray-300 hover:bg-opacity-90 w-[8rem] "
        >
          <GithubIcon />
        </button>
      </li>
      <button onClick={() => signIn("discord")} className="w-full px-2">
        <span className="flex h-11 items-center justify-center rounded-md bg-blue-700 hover:bg-opacity-90">
          <DiscordIcon />
        </span>
      </button>
      <button onClick={() => signIn("google")} className="w-full px-2">
        <span className="flex h-11 items-center justify-center rounded-md bg-red-500 hover:bg-opacity-90">
          <GoogleIcon />
        </span>
      </button>
    </ul>
  );
};

export default SignIn;
