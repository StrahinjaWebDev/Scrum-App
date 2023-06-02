import { useEffect } from "react";
import type { RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useDetectClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | undefined | null,
  handler?: (event: Event) => void,
  additionalRef?: RefObject<T> | undefined | null
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const addEl = additionalRef?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      if (addEl) {
        if (
          !el ||
          el.contains((event?.target as Node) || null) ||
          !addEl ||
          addEl.contains((event?.target as Node) || null)
        ) {
          return;
        }
      }

      handler && handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, additionalRef, handler]);
};

export default useDetectClickOutside;
