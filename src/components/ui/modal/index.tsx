"use client";

import React, { useState, useEffect, useRef } from "react";

import classNames from "classnames";
import useDetectClickOutside from "@/hooks/useDetectClickOutside ";
import Title from "../Title";
import { createPortal } from "react-dom";
import Overlay from "../Overlay";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  variant?: "primary" | "secondary";
  hasOverlay?: boolean;
  overlayClassName?: string;
  className?: string;
  isClosing?: boolean;
}

const Modal = ({
  onClose,
  variant = "primary",
  overlayClassName,
  hasOverlay,
  isClosing: isClosingProp,
  className,
  ...props
}: ModalProps) => {
  const ref = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useDetectClickOutside(ref, () => {
    setIsClosing(true);
  });

  useEffect(() => {
    if (isClosing || isClosingProp) {
      const t = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, 200);

      return () => {
        clearTimeout(t);
      };
    }
  }, [isClosing, isClosingProp, onClose]);

  return createPortal(
    <Overlay
      className={classNames("z-[60]", overlayClassName, {
        "bg-primary-bg bg-opacity-20 backdrop-blur-[5px] ": hasOverlay,
        "animate-[increaseOpacity_0.2s_ease]": !isClosing && !isClosingProp,
        "animate-[decreaseOpacity_0.2s_ease]": isClosing || isClosingProp,
      })}
    >
      <div
        {...props}
        ref={ref}
        className={classNames(
          "relative flex h-auto w-[30em] flex-col rounded-md border-[0.5px] border-[rgb(82,82,111)] border-opacity-75 shadow-modal-black shadow-black backdrop-blur-md",
          className,
          {
            "animate-[scaleShow_0.2s_ease]": !isClosing && !isClosingProp,
            "animate-[scaleHide_0.2s_ease]": isClosing || isClosingProp,
            "bg-[rgb(39,41,57)]": variant === "primary",
          }
        )}
      />
    </Overlay>,
    document.body
  );
};

Modal.Content = Content;
Modal.Title = Title;
Modal.Header = Header;
Modal.Footer = Footer;

export default Modal;
