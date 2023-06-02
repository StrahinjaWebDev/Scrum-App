import classNames from "classnames";
import React from "react";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Content = ({ className, ...props }: ContentProps) => {
  return <div {...props} className={classNames("px-3", className)} />;
};

export default Content;
