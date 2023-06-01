import React, { useState, useEffect } from "react";

interface Props {
  onCancel?: () => void;
}

const PromptModal = ({ onCancel }: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing && onCancel) {
      setTimeout(() => {
        setIsClosing(false);
        onCancel();
      }, 200);
    }
  }, [isClosing, onCancel]);

  return (
    <div className="fixed h-screen w-screen  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div
        className={`absolute transform animation-forwards text-second bg-fourth min-h-[${height}] w-[${width}] flex flex-col rounded-2xl justify-center border-first border-2 items-center 
        ${
          !isClosing
            ? "animate-[appearScale_0.2s_ease]"
            : "animate-[dissAppearScale_0.2s_ease]"
        }
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default PromptModal;
