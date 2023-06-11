"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/provider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <ReduxProvider>
        <div>
          <Toaster />
        </div>
        <SessionProvider>{children}</SessionProvider>
      </ReduxProvider>
    </>
  );
};

export default Providers;
