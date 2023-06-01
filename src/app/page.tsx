import { prisma } from "@/server/db";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Sidebar from "@/components/sidebar";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loader from "@/components/ui/Loader";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = await prisma?.user.findFirst({
    where: {
      name: session?.user.name,
    },
  });

  return (
    <div className="flex w-full h-full">
      <Sidebar user={user} />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[22em] justify-center w-1/3 border border-gray-600 rounded-md flex items-center flex-col"
        id="test-div"
      >
        <div className="flex flex-col items-center w-full gap-2">
          <p className="text-gray-200">Buttons</p>
          <div
            id="test-buttons"
            className="flex w-2/3 border justify-center border-gray-600 border-opacity-60 items-center rounded-md p-2 gap-2"
          >
            <Button className="w-24" variant="primary">
              Primary
            </Button>
            <Button className="w-24" variant="secondary">
              Secondary
            </Button>
            <Button className="w-24" variant="danger">
              Danger
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-4 gap-2">
          <p className="text-gray-200">Inputs</p>
          <div
            id="test-inputs"
            className="flex w-2/3 border justify-center border-gray-600 border-opacity-60 items-center rounded-md p-2 gap-2"
          >
            <Input
              variant="primary"
              className="bg-neutral-900 text-white"
              placeholder="Primary"
            />
            <Input variant="ghost" className="text-white" placeholder="Ghost" />
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-4 gap-2">
          <p className="text-gray-200">Loaders</p>
          <div
            id="test-loaders"
            className="flex w-2/3 border justify-center border-gray-600 border-opacity-60 items-center rounded-md p-2 gap-2"
          >
            <Loader variant="primary" />
            <Loader variant="secondary" />
            <Loader variant="primary" speed="fast" />
            <Loader variant="secondary" speed="fast" />
            <Loader variant="primary" size="sm" speed="fast" />
            <Loader variant="secondary" size="sm" speed="fast" />
          </div>
        </div>
      </div>
    </div>
  );
}
