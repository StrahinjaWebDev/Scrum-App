import React from "react";
import "./globals.scss";
import Providers from "@/provider/Providers";

export const metadata = {
  title: "Linear",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary mx-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
