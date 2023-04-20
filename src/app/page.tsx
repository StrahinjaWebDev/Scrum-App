import { prisma } from "@/server/db";
import React from "react";
import Signin from "@/Signin";

export default async function Home() {
  return (
    <div>
      <Signin />
    </div>
  );
}
