import classNames from "classnames";
import React from "react";

interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Overlay = ({ className, ...props }: OverlayProps) => {
  return (
    <div
      {...props}
      className={classNames(
        "fixed inset-0 z-[60] flex h-screen w-screen items-center justify-center animation-forwards",
        className
      )}
    />
  );
};

export default Overlay;
