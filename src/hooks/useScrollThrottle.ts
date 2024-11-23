import { useCallback, useRef } from "react";

export function useScrollThrottle(
  callback: (deltaY: number) => void,
  delay = 800
) {
  const isScrolling = useRef(false);
  const timeoutRef = useRef<any>();

  return useCallback(
    (deltaY: number) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      callback(deltaY);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        isScrolling.current = false;
      }, delay);
    },
    [callback, delay]
  );
}
