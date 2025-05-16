'use client'
// import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";
import classNames from "classnames";

import Hotjar from '@hotjar/browser';
import Head from "next/head";
import { useEffect } from "react";



// export const metadata: Metadata = {
//   themeColor: 'rgba(232, 233, 234, 1)',
//   title: "Earn Real Income by Sharing Idle Internet to Power AI | EnReach Network",
//   description: "Turn unused internet into income. Run an EnReach Node, earn $REACH tokens, and power real-time AI.",
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
        Earn Real Income by Sharing Idle Internet to Power AI | EnReach Network
      </title>
      <Head>
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

        <meta name="description" content="" />
        <link rel="canonical" href="http://enreach.network/" />

        <link rel="icon" href="/icon.svg" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />


        <meta
          data-rh="true"
          property="og:title"
          content="Earn Real Income by Sharing Idle Internet to Power AI | EnReach Network"
        ></meta>
        <meta
          name="description"
          content="Turn unused internet into income. Run an EnReach Node, earn $REACH tokens, and power real-time AI."
        />

        <meta
          name="twitter:image"
          content="https://enreach.network/metadata-img.jpg"
        ></meta>

        <meta
          name="description"
          content="Turn unused internet into income. Run an EnReach Node, earn $REACH tokens, and power real-time AI."
        />
        <meta
          property="og:title"
          content="Earn Real Income by Sharing Idle Internet to Power AI | EnReach Network"
        />
        <meta
          property="og:description"
          content="Turn unused internet into income. Run an EnReach Node, earn $REACH tokens, and power real-time AI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enreach.network" />
        <meta
          property="og:image"
          content="https://enreach.network/metadata-img.jpg"
        />
        <meta property="og:image:alt" content="Default image description" />
        <meta
          property="og:site_name"
          content="Earn Real Income by Sharing Idle Internet to Power AI | EnReach Network"
        />

        <meta
          data-rh="true"
          property="og:description"
          content="Turn unused internet into income. Run an EnReach Node, earn $REACH tokens, and power real-time AI."
        ></meta>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EnReachNetwork" />
        <meta
          name="twitter:title"
          content="Earn Real Income by Sharing Idle Internet to Power AI | EnReach Network"
        />
        <meta
          name="twitter:description"
          content="Turn unused internet into income. Run an EnReach Node, earn $REACH tokens, and power real-time AI."
        />
        <meta
          name="twitter:image"
          content="https://enreach.network/metadata-img.jpg"
        />

        <meta
          property="og:title"
          content="Earn Real Income by Sharing Idle Internet to Power AI | EnReach Network"
        />
        <meta
          property="og:description"
          content="Turn unused internet into income. Run an EnReach Node, earn $REACH tokens, and power real-time AI."
        />
        <meta
          property="og:image"
          content="https://enreach.network/metadata-img.jpg"
        />
        <meta property="og:url" content="https://enreach.network/" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Enreach" />
        <link rel="apple-touch-icon" href="https://enreach.network/icon.svg" />

        <iframe src="https://devnet.dashboard.enreach.network/" id="box"></iframe>
      </Head>

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
