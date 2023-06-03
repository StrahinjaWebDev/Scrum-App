import React from "react";
import Dropdown from "../ui/dropdown/Dropdown";
import Button from "../ui/Button";
import { signOut } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  userId: string;
  onClose: () => void;
}

const UserDropdown = ({ onClose, userId }: Props) => {
  const { push } = useRouter();

  const leaveWorkspace = async () => {
    try {
      await axios.put("http://localhost:3000/api/leaveWorkspace", {
        userId: userId,
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
