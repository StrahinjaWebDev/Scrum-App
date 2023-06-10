"use client";

import { getIssues } from "@/getIssues";
import type { Issue as IssueType, User } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { AssigneeIcon } from "../../../../../../public/svgs/AssigneIcon";
import Loader from "@/components/ui/Loader";
import AssigneDropdown from "./(components)/(modals)/AssigneDropdown";
import { getUsersInWorkspace } from "@/getUsersInWorkspace";

interface Props {
  columnId: string;
  workspaceId: string;
}

const Issue = ({ columnId, workspaceId }: Props) => {
  const [issues, setIssues] = useState([]);
  const [issueId, setIssueId] = useState("");
  const [users, setUsers] = useState<User[] | []>([]);

  const openAssigneeModal = (issueId: string) => {
    setIssueId(issueId);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersInWorkspace(workspaceId);
      setUsers(users);
    };
    fetchUsers();
  }, [workspaceId]);

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
      {issues.map((issue: IssueType) => (
        <div
          key={issue.id}
          className="p-4 rounded-md w-[320px] h-[100px] bg-slate-300 bg-opacity-5 border-gray-500 border-opacity-20"
        >
          <div className="flex justify-between flex-col">
            <div className="flex justify-between">
              <p className="text-white font-semibold">{issue.name}</p>
              <button onClick={() => openAssigneeModal(issue.id)}>
                <AssigneeIcon />
                {issueId === issue.id && (
                  <AssigneDropdown
                    users={users}
                    onClose={() => openAssigneeModal("")}
                    issueId={issue.id}
                  />
                )}
              </button>
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
