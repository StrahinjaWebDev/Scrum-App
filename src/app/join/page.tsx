"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import axios from "axios";
import type { Workspace as WorkspaceType } from "@prisma/client";
import Workspace from "@/app/join/(components)/Workspace";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Organisation = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const router = useRouter();

  const { data: session } = useSession();

  const createWorkspace = async () => {
    const newWorkspace = {
      userId: session?.user.id,
      name: name,
    };
    const request = await axios.post(
      "http://localhost:3000/api/createWorkspace",
      newWorkspace
    );
    router.push("/");
  };

  useEffect(() => {
    const getData = async () => {
      const { data: workspaces } = await axios.get(
        "http://localhost:3000/api/getWorkspace"
      );
      setData(workspaces);
    };
    getData();
  }, []);

  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center items-center bg-slate-300 bg-opacity-5 h-[100vh] gap-6">
        <span className="text-fifth text-2xl font-medium">
          Create a new workspace
        </span>
        <p className="text-fifth text-[1em] text-opacity-70 w-1/4 text-center">
          Workspaces are shared enviroments where teams can work on projects,
          cycles and tasks.
        </p>
        <div className="flex flex-col items-center justify-center gap-12 bg-slate-400 bg-opacity-5  w-[29em] h-[17em] rounded-xl">
          <div className="flex flex-col gap-2">
            <p className="text-fifth text-sm">Workspace Name</p>
            <Input
              variant="primary"
              className="w-[29em] h-12 bg-neutral-900 text-white"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-fifth text-sm">Workspace URL</p>
            <Input
              variant="primary"
              className="w-[29em] h-12 bg-neutral-900 text-white"
              defaultValue={"http://localhost:3000/"}
            />
          </div>
        </div>

        <Button
          variant="danger"
          className="w-[24em] h-12 text-sm"
          onClick={createWorkspace}
        >
          Create Workspace
        </Button>
      </div>
      <div className="border grow h-screen flex items-center justify-center">
        <div className="border h-64 w-64">
          {data?.map((workspace: WorkspaceType) => {
            return (
              <Workspace
                key={workspace.id}
                id={workspace.id}
                name={workspace.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Organisation;
