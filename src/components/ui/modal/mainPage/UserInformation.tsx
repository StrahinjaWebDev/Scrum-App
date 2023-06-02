import React from "react";
import Dropdown from "../../dropdown/Dropdown";
import Button from "../../Button";
import { signOut } from "next-auth/react";

interface Props {
  setUserInformationsModal: (isOpen: boolean) => void;
}

const UserInformation = ({ setUserInformationsModal }: Props) => {
  return (
    <Dropdown
      className="bg-secondary bg-opacity-25 my-6 ml-[21.5em] w-[11.5em] mt-[1.930em]"
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
