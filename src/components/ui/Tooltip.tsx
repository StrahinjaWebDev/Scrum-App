import React, { useState, useEffect } from "react";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Tooltip = ({ text, children, ...props }: Props) => {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(() => {
        setClosing(false);
        setShow(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [closing]);

  return (
    <div className="relative self-start z-[99]">
      {show && (
        <div
          style={{
            width: "max-content",
          }}
          className={classNames(
            "absolute left-full top-1/2 ml-3 mt-1 w-fit -translate-y-1/2 rounded-md border border-neutral-700 bg-dark-3 bg-opacity-60 p-2 backdrop-blur-sm",
            {
              "animate-[appearScale_0.2s_ease]": show,
              "animate-[dissapearScale_0.2s_ease]": closing,
            }
          )}
        >
          <p className="text-xs text-white">{text}</p>
        </div>
      )}
      <div
        className="self-start"
        {...props}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setClosing(true)}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
