import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React from "react";

const Organisation = async () => {
  return (
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

      <Button variant="danger" className="w-[24em] h-12 text-sm">
        Create Workspace
      </Button>
    </div>
  );
};

export default Organisation;
