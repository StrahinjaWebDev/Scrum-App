"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <Provider store={store}>
        <div>
          <Toaster />
        </div>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </>
  );
};

export default Providers;
