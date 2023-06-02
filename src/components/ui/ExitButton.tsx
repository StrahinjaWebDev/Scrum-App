import classNames from "classnames";
import React from "react";
import { BsX } from "react-icons/bs";

interface ExitButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
}

const ExitButton = ({ className, onClick, ...props }: ExitButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "ml-auto rounded p-[2px] hover:bg-[rgb(100,104,138)] hover:bg-opacity-[0.25]",
        className
      )}
      onClick={onClick}
    >
      <BsX className="h-5 w-5 fill-[#DCD8FE93]" />
    </button>
  );
};

export default ExitButton;
