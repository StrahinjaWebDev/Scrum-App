"use client";

import { getIssues } from "@/getIssues";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { Issue, Issue as IssueType, User } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { AssigneeIcon } from "../../../../../../public/svgs/AssigneIcon";
import Loader from "@/components/ui/Loader";
import AssigneDropdown from "./(components)/(modals)/AssigneDropdown";
import { getUsersInWorkspace } from "@/getUsersInWorkspace";
import Image from "next/image";

interface Props {
  columnId: string;
  workspaceId: string;
}

const Issue = ({ columnId, workspaceId }: Props) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [issueId, setIssueId] = useState("");
  const [users, setUsers] = useState<User[] | []>([]);

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
        const updatedIssues = issues.map((issue: Issue) => {
          const assigne = users.find((user) => user.id === issue.assigneId);
          if (assigne) {
            const assigneImage = assigne.image;
            return { ...issue, assigneImage };
          }
          return issue;
        });
        setIssues(updatedIssues);
      }
    };
    fetchIssues();
  }, [columnId, users]);

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
              <button onClick={() => setIssueId(issue.id)}>
                {issue?.assigneImg !== "" ? (
                  <>
                    <Image
                      src={issue?.assigneImg || ""}
                      width={20}
                      height={20}
                      className="rounded-full"
                      alt="assigneImg"
                    />
                  </>
                ) : (
                  <AssigneeIcon />
                )}

                {issueId === issue.id && (
                  <AssigneDropdown
                    users={users}
                    onClose={() => setIssueId("")}
                    issueId={issue.id}
                    issues={issues}
                    setIssues={setIssues}
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
