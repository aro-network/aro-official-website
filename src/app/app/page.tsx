"use client";

import { useEffect } from "react";

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}
const isInStandaloneMode = (): boolean => {
  const isStandaloneDisplay = window.matchMedia("(display-mode: standalone)").matches;
  const isIOSStandalone = (window.navigator as NavigatorWithStandalone).standalone === true;
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

  const ENV: "prod" | "beta" = (process.env.NEXT_PUBLIC_ENV as any) || "prod";

  return (
    <iframe
      src={ENV === 'beta' ? 'https://staging-dashboard.aro.network/' : 'https://devnet-dashboard.aro.network/'}
      style={{ width: "100vw", height: "100vh", border: "none" }}
      allow="fullscreen"
    />
  );
};

export default App;
