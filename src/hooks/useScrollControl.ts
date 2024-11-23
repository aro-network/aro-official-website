import { useCallback, useRef, useState } from "react";

export function useScrollControl() {
  const [currentContainer, setCurrentContainer] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<any>();

  const scroll = useCallback(
    (
      direction: "up" | "down",
      totalContainers: number,
      sectionsPerContainer: number
    ) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (direction === "down") {
        if (currentSection < sectionsPerContainer - 1) {
          setCurrentSection((prev) => prev + 1);
        } else if (currentContainer < totalContainers - 1) {
          setCurrentContainer((prev) => prev + 1);
          setCurrentSection(0);
        }
      } else {
        if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        } else if (currentContainer > 0) {
          setCurrentContainer((prev) => prev - 1);
          setCurrentSection(sectionsPerContainer - 1);
        }
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      console.log(
        "currentContainercurrentContainer",
        currentContainer,
        currentSection
      );

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 700); // Shorter delay for better responsiveness
    },

    [currentContainer, currentSection]
  );

  return {
    currentContainer,
    currentSection,
    scroll,
    setCurrentSection,
  };
}
