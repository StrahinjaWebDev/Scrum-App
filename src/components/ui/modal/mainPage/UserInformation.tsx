import React from "react";
import Dropdown from "../../dropdown/Dropdown";
import Button from "../../Button";
import { signOut } from "next-auth/react";

interface UserInformationProps {
  setUserInformationsModal: (isOpen: boolean) => void;
}

const UserInformation = ({
  setUserInformationsModal,
}: UserInformationProps) => {
  return (
    <Dropdown
      className="bg-secondary bg-opacity-25 my-6 ml-[20em] w-[11.5em]"
      onClose={() => setUserInformationsModal(false)}
    >
      <Button variant="ghost" size="sm" onClick={() => signOut()}>
        View profile
      </Button>
      <Button variant="ghost" size="sm">
        Settings
      </Button>
      <Button variant="ghost" size="sm" onClick={() => signOut()}>
        Logout
      </Button>
    </Dropdown>
  );
};

export default UserInformation;
