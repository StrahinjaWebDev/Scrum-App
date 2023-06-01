import classNames from "classnames";
import React from "react";

interface Props {
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "default";
  speed?: "fast" | "default";
}

const Loader = ({
  variant = "primary",
  size = "default",
  speed = "default",
  className,
}: Props) => {
  return (
    <span
      className={classNames(
        "inline-block rounded-[50%] border-b-transparent",
        className,
        {
          "border-[rgb(87,91,199)]": variant === "primary",
          "border-white": variant === "secondary",
          "h-[48px] w-[48px] border-[5px]": size === "default",
          "h-[20px] w-[20px] border": size === "sm",
          "animate-spin": speed === "default",
          "animate-[spin_500ms_linear_infinite]": speed === "fast",
        }
      )}
    ></span>
  );
};

export default Loader;
