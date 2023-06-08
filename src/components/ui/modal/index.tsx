"use client";

import React, { useRef } from "react";

import classNames from "classnames";
import useDetectClickOutside from "@/hooks/useDetectClickOutside ";
import Title from "../Title";
import { createPortal } from "react-dom";
import Overlay from "../Overlay";
import Header from "../Headers";
import Content from "../Content";
import Footer from "../Footer";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

interface ModalProps extends MotionProps {
  onClose: () => void;
  variant?: "primary" | "secondary";
  hasOverlay?: boolean;
  overlayClassName?: string;
  className?: string;
  isClosing?: boolean;
}

const Modal = ({
  onClose,
  variant,
  overlayClassName,
  hasOverlay,
  className,
  ...props
}: ModalProps) => {
  const ref = useRef(null);

  useDetectClickOutside(ref, () => onClose());
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Overlay
        className={classNames("z-[60]", overlayClassName, {
          "bg-primary-bg bg-opacity-20 backdrop-blur-[5px] ": hasOverlay,
        })}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          {...props}
          ref={ref}
          className={classNames(
            "relative flex h-auto w-[30em] flex-col rounded-md border-[0.5px] border-[rgb(82,82,111)] border-opacity-75 shadow-modal-black shadow-black backdrop-blur-md",
            className,
            {
              "bg-[rgb(39,41,57)]": variant === "primary",
            }
          )}
        />
      </Overlay>
    </motion.div>,
    document.body
  );
};

Modal.Content = Content;
Modal.Title = Title;
Modal.Header = Header;
Modal.Footer = Footer;

export default Modal;
