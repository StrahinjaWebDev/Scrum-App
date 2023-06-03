import React from "react";
import Button from "../../Button";
import Dropdown from "../../dropdown/Dropdown";
import { useRouter } from "next/navigation";

interface Props {
  setUserOrganisationModal: (isOpen: boolean) => void;
}

const UserOrganisationModal = ({ setUserOrganisationModal }: Props) => {
  const router = useRouter();
  return (
    <Dropdown
      className="mt-9 bg-secondary bg-opacity-25 left-0 top-full origin-top-left w-[15.5em] "
      onClose={() => setUserOrganisationModal(false)}
    >
      <Button variant="ghost" size="sm" onClick={() => router.push("/join")}>
        Create or join a workspace
      </Button>
      <Button variant="ghost" size="sm" onClick={() => signOut()}>
        Logout
      </Button>
    </Dropdown>
  );
};

export default UserOrganisationModal;
