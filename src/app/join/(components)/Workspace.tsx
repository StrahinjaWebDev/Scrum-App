"use client";

import React from "react";
import Button from "../../../components/ui/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
}

const Workspace = ({ id, name }: Props) => {
  const router = useRouter();

  const { data: session } = useSession();

  const body = {
    workspaceId: id,
    userId: session?.user?.id,
  };

  const joinUserToWorkspace = async () => {
    try {
      await axios.put("http://localhost:3000/api/joinUser", body);
      router.push("/");
    } catch (error) {}
  };

  return (
    <div className="flex items-center gap-4 w-full px-6 justify-between pt-5">
      <p className="text-white">{name}</p>
      <Button
        onClick={() => {
          body.userId && body.userId && joinUserToWorkspace();
        }}
        variant="primary"
      >
        Joint
      </Button>
    </div>
  );
};

export default Workspace;
