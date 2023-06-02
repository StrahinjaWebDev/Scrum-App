import React from "react";
import classNames from "classnames";
import Loader from "./Loader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "ghost";
  isLoading?: boolean;
  size?: "sm" | "default" | "lg";
  type?: "button" | "submit" | "reset";
}

const Button = ({
  className,
  variant = "primary",
  isLoading = false,
  size = "default",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "relative inline-flex items-center gap-2 whitespace-nowrap rounded transition-all duration-75",
        className,
        {
          "border border-[#151516] bg-[#151516] text-[#EEEFF1]  hover:bg-opacity-80 flex justify-center":
            variant === "primary",
          "border-[rgb(49,50,72)] bg-[rgb(39,41,57)] text-[#EEEFF1] hover:bg-opacity-90 flex justify-center":
            variant === "secondary",
          "border-third bg-third shadow-md shadow-[rgb(0,0,0)] hover:bg-opacity-90 flex justify-center text-fifth font-medium":
            variant === "danger",
          "hover:bg-opacity hover:border-spacing-100 border border-[rgb(49,50,72)]  border-opacity-75 bg-opacity-0 text-[rgb(210,211,224)]":
            variant === "ghost",
          "h-9 min-w-[36px] py-0 px-[14px] text-[0.8125rem]hover:bg-opacity-90 ":
            size === "default",
          "h-8 px-3 text-sm font-medium border-none": size === "sm",
          "h-10 px-4 text-lg": size == "lg",
        }
      )}
    >
      {children}
      {isLoading ? <Loader variant="secondary" speed="fast" size="sm" /> : null}
    </button>
  );
};

export default Button;
