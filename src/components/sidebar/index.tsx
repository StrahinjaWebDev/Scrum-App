"use client";

import React, { useEffect, useState } from "react";
import type { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UserInformation from "../ui/modal/mainPage/UserInformation";
import Button from "../ui/Button";
import UserOrganisationModal from "../ui/modal/mainPage/UserOrganisationModal";
import axios from "axios";

interface Props {
  user: User | null;
}

const Sidebar = ({ user }: Props) => {
  const [userInformationsModal, setUserInformationsModal] = useState(false);
  const [userOrganisationModal, setUserOrganisationModal] = useState(false);
  const [userData, setUserData] = useState({});
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: user } = await axios.get(
        "http://localhost:3000/api/getUser"
      );

      setUserData(user);
    };

    getUser();
  }, []);

  useEffect(() => {
    if (session === null && status === "unauthenticated") {
      router.push("/sign-in");
    }
  }, [session, status, router]);

  return (
    <div className="w-[13.5em] h-[100vh] bg-slate-200 bg-opacity-5 border-r flex border-gray-500 border-opacity-20 justify-center items-center">
      <div className="flex items-start w-full min-h-[98%] justify-around ">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setUserOrganisationModal(true)}
        >
          {user?.name}
        </Button>
        {userOrganisationModal && (
          <UserOrganisationModal
            setUserOrganisationModal={setUserOrganisationModal}
          />
        )}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setUserOrganisationModal(true)}
        >
          {userData?.Workspace?.name}
        </Button>
        <Image
          src={user?.image || ""}
          width={20}
          height={20}
          className="rounded-full mt-[0.4em]"
          alt="userImg"
          onClick={() => setUserInformationsModal(true)}
        />
        {userInformationsModal && (
          <UserInformation
            setUserInformationsModal={setUserInformationsModal}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
