'use client'
// import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";
import classNames from "classnames";

import Hotjar from '@hotjar/browser';
import { useEffect } from "react";



// export const metadata: Metadata = {
//   themeColor: 'rgba(232, 233, 234, 1)',
//   title: "Earn Real Income by Sharing Idle Internet to Power AI | ARO Network",
//   description: "Turn unused internet into income. Run an ARO Node, earn $ARO tokens, and power real-time AI.",
//   keywords: [
//     "Enreach Network",
//     "Enreach",
//     "Web3",
//     "Web3 Builders Stack",
//     "Off-chain computation",
//     "Smart Contract",
//   ],
//   "icons": [
//     {
//       "url": "https://enreach.network/favicon.ico",
//       'rel': "icon",
//     }
//   ]
// }

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ubuntu",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

const fonts = [ubuntu, poppins];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV === "production") {
    console.log = function () { };
    console.error = function () { };
    console.warn = function () { };
  }
  const siteId = 6397730;
  const hotjarVersion = 6;

  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      Hotjar.init(siteId, hotjarVersion);
    }
  }, []);


  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").then(
        (registration) => {
          console.log("Service Worker registered:", registration);
        },
        (error) => {
          console.error("Service Worker registration failed:", error);
        }
      );
    }
  }, []);

  return (
    <html lang="en">
      <title>
        Earn Real Income by Sharing Idle Internet to Power AI | ARO Network
      </title>
      <script
        dangerouslySetInnerHTML={{
          __html:
            `
   (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6397730,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `
        }}
      >

      </script>


      <link rel="icon" href="/favicon.ico" />

      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />

      <meta name="title" content="Earn Real Income by Sharing Idle Internet to Power AI | ARO Network" />
      <meta name="description" content="Turn unused internet into income. Run an ARO Node, earn $ARO tokens, and power real-time AI." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aro.network/" />
      <meta property="og:title" content="Earn Real Income by Sharing Idle Internet to Power AI | ARO Network" />
      <meta property="og:description" content="Turn unused internet into income. Run an ARO Node, earn $ARO tokens, and power real-time AI." />
      <meta property="og:image" content="https://aro.network/metadata-img.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aro.network/" />
      <meta property="twitter:title" content="Earn Real Income by Sharing Idle Internet to Power AI | ARO Network" />
      <meta property="twitter:description" content="Turn unused internet into income. Run an ARO Node, earn $ARO tokens, and power real-time AI." />
      <meta property="twitter:image" content="https://aro.network/metadata-img.png" />
      <meta name="twitter:site" content="@AroNetwork" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Aro" />
      <link rel="apple-touch-icon" href="https://aro.network/icon.svg" />


      <body
        className={classNames(
          fonts.map((item) => item.variable).join(" "),
          "font-Poppins"
        )}
      >
        <Toaster position="top-center" />

        {children}
      </body>
    </html>
  );
}
