import { useState, useEffect } from "react";

const useMobileDetect = (width = 1000) => {
  const [isMobile, setIsMobile] = useState(false);

  const getWindowWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const handleResize = () => {
    setIsMobile(getWindowWidth() <= width);
  };
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (!isBrowser) return;
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobileDetect;
