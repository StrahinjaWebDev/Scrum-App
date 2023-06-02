import React from "react";
import classNames from "classnames";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}

const Input = ({ variant, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={classNames(
        "rounded-md py-[0.40rem] text-sm outline-none",
        className,
        {
          "border border-[rgb(133,134,153)] px-2 transition-all duration-200 focus:border-third border-opacity-20":
            variant === "primary",
          "bg-transparent": variant === "ghost",
        }
      )}
    />
  );
};

export default Input;
