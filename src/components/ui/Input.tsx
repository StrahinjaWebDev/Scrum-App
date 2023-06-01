import React from "react";
import classNames from "classnames";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  className?: string;
  variant?: "primary" | "secondary";
}

const Input = ({ variant, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={classNames(
        "invalid:border-b-1 block w-full rounded-md bg-transparent py-[0.40rem] text-sm text-white outline-none",
        className,
        {
          "border border-[rgb(133,134,153)] px-2 transition-all duration-200 focus:border-[rgb(87,91,199)]":
            variant === "primary",
        }
      )}
    />
  );
};

export default Input;
