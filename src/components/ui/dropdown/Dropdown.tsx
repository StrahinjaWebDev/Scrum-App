"use client";

import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import useDetectClickOutside from "@/hooks/useDetectClickOutside ";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isClosing?: boolean;
  btnRef?: React.RefObject<HTMLButtonElement>;
  onClose: () => void;
  animation?: "scale" | "slide" | "fade" | "none";
}

const Dropdown = ({
  btnRef,
  onClose: close,
  children,
  className,
  animation = "scale",
  ...props
}: Props) => {
  const [isClosing, setIsClosing] = useState(false);
  const dropdownRef = useRef(null);

  useDetectClickOutside(
    dropdownRef,
    () => {
      if (animation === "none") close();
      else setIsClosing(true);
    },
    btnRef
  );

  useEffect(() => {
    if (isClosing || props.isClosing) setTimeout(() => close(), 200);
  }, [isClosing, props.isClosing, close]);

  return (
    <div
      ref={dropdownRef}
      {...props}
      className={classNames(
        "absolute z-20 flex flex-col rounded-lg border border-secondary opacity-100 bg-dark-3 text-base shadow-lg animation-forwards",
        className,
        {
          "animate-[appearScale_0.3s_cubic-bezier(0.19,1,0.22,1)]":
            (!isClosing && animation === "scale") ||
            (!props.isClosing && animation === "scale"),
          "animate-[dissapearScale_0.2s_cubic-bezier(0.19,1,0.22,1)]":
            (isClosing && animation === "scale") ||
            (props.isClosing && animation === "scale"),
        }
      )}
    >
      {children}
    </div>
  );
};
Dropdown.displayName = "Dropdown";

export default Dropdown;
