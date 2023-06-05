import React from "react";
import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

interface Props {
  setUserOrganisationDropdown: (isOpen: boolean) => void;
}

const UserOrganisationDropdown = ({ setUserOrganisationDropdown }: Props) => {
  const router = useRouter();
  return (
    <Dropdown
      className="mt-9 bg-secondary bg-opacity-25 left-0 top-full origin-top-left w-[15.5em] "
      onClose={() => setUserOrganisationDropdown(false)}
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

export default UserOrganisationDropdown;
