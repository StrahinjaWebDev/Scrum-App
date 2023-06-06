import React from "react";
import { toast } from "react-hot-toast";
import type { ToastPosition } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { MdCheckCircle, MdError } from "react-icons/md";
import classNames from "classnames";

export const toastWarning = (
  heading: string,
  description?: string,
  position: ToastPosition | undefined = "bottom-right"
) => {
  const isBottom =
    position === "bottom-center" ||
    position === "bottom-left" ||
    position === "bottom-right";
  const isTop =
    position === "top-center" ||
    position === "top-left" ||
    position === "top-right";

  return toast.custom(
    (t) => (
      <div
        className={classNames(
          "pointer-events-auto relative flex w-full max-w-md rounded-lg border border-neutral-500 bg-dark-2 shadow-lg ring-1 ring-black ring-opacity-5",
          {
            "translate-y-[50px] animate-[appearFromBottom_0.6s_cubic-bezier(0.17,0.84,0.44,1);] animation-forwards first-letter:relative":
              t.visible && isBottom,
            "translate-y-[-50px] animate-[appearFromTop_0.6s_cubic-bezier(0.17,0.84,0.44,1);] animation-forwards first-letter:relative":
              t.visible && isTop,
            "animate-[dissapearScale_0.2s_ease] animation-forwards": !t.visible,
          }
        )}
      >
        <MdError className="absolute left-2 top-[18px] text-neutral-500" />

        <div className="ml-1 w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-neutral-400">{heading}</p>
              <p className="mt-1 text-sm text-gray-500">
                {description && description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg p-4 text-sm font-medium focus:outline-none"
          >
            <AiOutlineClose className="text-sm" />
          </button>
        </div>
      </div>
    ),
    { position: position }
  );
};
export const toastSuccess = (
  heading: string,
  description?: string,
  position: ToastPosition | undefined = "bottom-right"
) => {
  const isBottom =
    position === "bottom-center" ||
    position === "bottom-left" ||
    position === "bottom-right";
  const isTop =
    position === "top-center" ||
    position === "top-left" ||
    position === "top-right";

  return toast.custom(
    (t) => (
      <div
        className={classNames(
          "pointer-events-auto relative flex w-full max-w-md rounded-lg border border-neutral-500 bg-dark-2 shadow-lg ring-1 ring-black ring-opacity-5",
          {
            "translate-y-[50px] animate-[appearFromBottom_0.6s_cubic-bezier(0.17,0.84,0.44,1);] animation-forwards first-letter:relative":
              t.visible && isBottom,
            "translate-y-[-50px] animate-[appearFromTop_0.6s_cubic-bezier(0.17,0.84,0.44,1);] animation-forwards first-letter:relative":
              t.visible && isTop,
            "animate-[dissapearScale_0.2s_ease] animation-forwards": !t.visible,
          }
        )}
      >
        <MdCheckCircle className="absolute left-2 top-[18px] text-emerald-500" />

        <div className="ml-1 w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5"></div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-neutral-400">{heading}</p>
              <p className="mt-1 text-sm text-gray-500">
                {description && description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg p-4 text-sm font-medium focus:outline-none"
          >
            <AiOutlineClose className="text-sm" />
          </button>
        </div>
      </div>
    ),
    { position: position }
  );
};
