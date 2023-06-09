"use client";
import { getIssues } from "@/getIssues";
import { Issue } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { AssigneeIcon } from "../../../../../../public/svgs/AssigneIcon";
import Loader from "@/components/ui/Loader";

interface Props {
  columnId: string;
}

const Issue = ({ columnId }: Props) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      if (columnId) {
        const issues = await getIssues(columnId);
        setIssues(issues);
      }
    };
    fetchIssues();
  }, [columnId]);

  return columnId ? (
    <>
      {issues.map((issue: Issue) => (
        <div
          key={issue.id}
          className="p-4 rounded-md w-[320px] h-[100px] bg-slate-300 bg-opacity-5 border-gray-500 border-opacity-20"
        >
          <div className="flex justify-between flex-col">
            <div className="flex justify-between">
              <p className="text-white font-semibold">{issue.name}</p>
              <p>
                <AssigneeIcon />
              </p>
            </div>
            <div>
              <p className="p-1 text-sm text-white text-opacity-60">
                {issue.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  ) : (
    <div className="h-screen w-screen flex justify-center items-center">
      <Loader variant="primary" className="bg-red-500" />
    </div>
  );
};

export default Issue;
