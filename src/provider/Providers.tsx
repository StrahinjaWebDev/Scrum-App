"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Providers;
