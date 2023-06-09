import React from "react";
import Dropdown from "../../../../../components/ui/Dropdown";
import Button from "../../../../../components/ui/Button";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getBaseUrl } from "@/lib/getBaseUrl";

interface Props {
  onClose: () => void;
}

const UserDropdown = ({ onClose }: Props) => {
  const { push } = useRouter();
  const baseUrl = getBaseUrl();
  const { data: session } = useSession();

  const leaveWorkspace = async () => {
    try {
      await axios.put(`${baseUrl}/api/leaveWorkspace`, {
        userId: session?.user.id,
      });
      push("/join");
    } catch (error) {}
  };

  return (
    <Dropdown
      className="bg-secondary backdrop-blur-sm bg-opacity-60 mt-1 origin-top-left left-0 top-full w-[11.5em]"
      onClose={onClose}
    >
      <Button variant="ghost" size="sm">
        Settings
      </Button>
      <Button variant="ghost" size="sm" onClick={leaveWorkspace}>
        Leave Workspace
      </Button>
      <Button variant="ghost" size="sm" onClick={() => signOut()}>
        Logout
      </Button>
    </Dropdown>
  );
};

export default UserDropdown;
