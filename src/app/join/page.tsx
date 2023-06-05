"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import type { Workspace as WorkspaceType } from "@prisma/client";
import Workspace from "@/app/join/(components)/Workspace";
import { LinearIcon } from "../../../public/svgs/Svgs";
import Button from "@/components/ui/Button";

const Organisation = () => {
  const [data, setData] = useState([]);

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
    <div className="flex flex-col justify-center items-center bg-slate-300 bg-opacity-5 h-[100vh] gap-6 ">
      <div className="h-screen flex items-center justify-center flex-col gap-5 w-[35%]">
        <LinearIcon />
        <p className="text-3xl text-fifth font-semibold">
          Join a team at Linear
        </p>
        <span className="text-secondary font-medium">
          Teams are group of people who reguraly work toghter on tasks and
          projects
        </span>
        <div className="max-h-[30em] w-full overflow-y-auto scrollbar-primary rounded-md bg-secondary bg-opacity-20 shadow-black shadow-lg">
          <p className="text-white flex justify-center items-center my-5 mx-11 bg-slate-300 bg-opacity-5 w-[15em] h-10 rounded-2xl border-secondary border-2 font-medium text-opacity-80 border-opacity-30">
            Join existing teams
          </p>
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
