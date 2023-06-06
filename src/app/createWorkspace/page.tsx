"use client";

import axios from "axios";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { ApiCreateNewWorkspaceRequest } from "../api/(workspace)/createWorkspace/api-request";
import { apiCreateWorkspaceValidator } from "../api/(workspace)/createWorkspace/api-request";
import { Toaster } from "react-hot-toast";
import { toastSuccess, toastWarning } from "@/components/ui/Toasters";
import { z } from "zod";

const CreateNewWorkspace = () => {
  const [name, setName] = useState("");

  const router = useRouter();

  const { data: session } = useSession();

  const createWorkspace = async () => {
    try {
      const newWorkspace: ApiCreateNewWorkspaceRequest = {
        userId: session?.user.id || "",
        name: name,
      };
      await apiCreateWorkspaceValidator.parseAsync(newWorkspace);
      await axios.post(
        "http://localhost:3000/api/createWorkspace",
        newWorkspace
      );
      router.push("/");
      toastSuccess("Success", "Workspace created successfully");
    } catch (err) {
      if (err instanceof z.ZodError) {
        toastWarning("Failed", err.issues[0].message);
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 bg-opacity-5 h-[100vh] gap-6">
      <span className="text-fifth text-2xl font-medium">
        Create a new workspace
      </span>
      <p className="text-fifth text-[1em] text-opacity-70 w-1/4 text-center">
        Workspaces are shared environments where teams can work on projects,
        cycles, and tasks.
      </p>
      <div className="flex flex-col items-center justify-center gap-8 bg-slate-400 bg-opacity-5  w-[29em] h-[17em] rounded-xl">
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
      <Toaster />
    </div>
  );
};

export default CreateNewWorkspace;
