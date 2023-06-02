import classNames from "classnames";
import React from "react";
import Button from "../Button";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  onSubmit: () => void;
}

const Footer = ({ className, onSubmit, ...props }: FooterProps) => {
  return (
    <div
      {...props}
      className={classNames(
        "flex w-full items-center justify-between px-3 pb-3 pt-[6px]",
        className
      )}
    >
      <div className="ml-auto flex items-center">
        <Button
          onClick={onSubmit}
          variant="primary"
          className=" text-sm"
          size="sm"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Footer;
