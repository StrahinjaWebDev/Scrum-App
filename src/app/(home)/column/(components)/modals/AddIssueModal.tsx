import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/modal";
import React from "react";

interface Props {
  onClose: () => void;
}

const AddIssueModal = ({ onClose }: Props) => {
  return (
    <Modal
      onClose={onClose}
      className="bg-dark-2 bg-opacity-90 border-gray-700 border-opacity-10 w-[750px] h-[15em] pl-6"
    >
      <Modal.Header onClose={onClose} className="text-white text-sm">
        New Issue
      </Modal.Header>
      <Input
        placeholder="Issue title"
        variant="ghost"
        className="w-full placeholder:text-xl placeholder:font-semibold pt-3"
      />
      <Input
        placeholder="Add description..."
        variant="ghost"
        className="w-full placeholder:text-[1.15em] h-[5em]"
      />
      <div className="flex justify-end mr-3">
        <Button variant="danger" className="w-[7em] h-[2.2em] text-sm mt-12">
          Create issue
        </Button>
      </div>
    </Modal>
  );
};

export default AddIssueModal;
