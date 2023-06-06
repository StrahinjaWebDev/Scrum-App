import classNames from "classnames";
import React from "react";
import ExitButton from "./ExitButton";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  onClose: () => void;
}

const Header = ({ className, onClose, ...props }: HeaderProps) => {
  return (
    <div
      {...props}
      className={classNames(
        "flex w-full items-center justify-between px-3 pt-3 pb-[6px]",
        className
      )}
    >
      {props.children}
      <ExitButton onClick={onClose} />
    </div>
  );
};

export default Header;
