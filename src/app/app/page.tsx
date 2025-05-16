"use client";

import { useEffect } from "react";
interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}
const App = () => {
  useEffect(() => {
    const isPWA =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as NavigatorWithStandalone).standalone === true;
    if (!isPWA) {
      window.location.href = "/";
    }
  }, []);

  return (
    <iframe
      src="https://devnet.dashboard.enreach.network/"
      style={{ width: "100vw", height: "100vh", border: "none" }}
      allow="fullscreen"
    />
  );
};

export default App;
