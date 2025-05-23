"use client";

import { useEffect } from "react";

const isInStandaloneMode = (): boolean => {
  const isStandaloneDisplay = window.matchMedia("(display-mode: standalone)").matches;
  const isIOSStandalone = (window.navigator as any).standalone === true;
  const hasNoReferrer = document.referrer === "";

  return isStandaloneDisplay || isIOSStandalone || hasNoReferrer;
};

const App = () => {
  useEffect(() => {
    const isPWA = isInStandaloneMode();

    if (!isPWA) {
      window.location.href = "/";
    }
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch((e) => console.warn("Fullscreen request failed", e));
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
