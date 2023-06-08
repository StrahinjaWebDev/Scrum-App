import Button from "@/components/ui/Button";
import Modal from "@/components/ui/modal";
import React from "react";

interface Props {
  onClose: () => void;
}

const CreateBoard = ({ onClose }: Props) => {
  return (
    <Modal className="w-[30em] py-8 px-4 bg-dark-4" onClose={onClose}>
      <div className="flex flex-col items-center gap-5">
        <p className="text-center">
          Are you sure that you want to permanently delete this board, including
          but not limited to columns, issues, and comments?
        </p>
        <div className="flex items-center gap-2">
          <Button className="w-24 border" variant="secondary">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateBoard;
