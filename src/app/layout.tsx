import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Enreach Network",
  description: " Enreach Network",
};

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
  return (
    <html lang="en">
      <title>
        EnReach Network | Earn Real Income by Sharing Idle Internet to Power AI
      </title>

      <meta name="description" content="" />
      <link rel="canonical" href="http://enreach.network/" />

      <link rel="icon" href="/icon.svg" />

      <meta
        data-rh="true"
        property="og:title"
        content="EnReach Network | Earn Real Income by Sharing Idle Internet to Power AI"
      ></meta>
      <meta
        name="description"
        content="Turn unused bandwidth into income. Join EnReach’s decentralized edge cloud, run a node, earn $REACH tokens, and fuel real-time AI delivery."
      />

      <meta
        name="twitter:image"
        content="https://enreach.network/metadata-img.jpg"
      ></meta>

      <meta
        name="description"
        content="Turn unused bandwidth into income. Join EnReach’s decentralized edge cloud, run a node, earn $REACH tokens, and fuel real-time AI delivery."
      />
      <meta
        property="og:title"
        content="EnReach Network | Earn Real Income by Sharing Idle Internet to Power AI"
      />
      <meta
        property="og:description"
        content="Turn unused bandwidth into income. Join EnReach’s decentralized edge cloud, run a node, earn $REACH tokens, and fuel real-time AI delivery."
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
        content="EnReach Network | Earn Real Income by Sharing Idle Internet to Power AI"
      />

      <meta
        data-rh="true"
        property="og:description"
        content="Turn unused bandwidth into income. Join EnReach’s decentralized edge cloud, run a node, earn $REACH tokens, and fuel real-time AI delivery."
      ></meta>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EnReachNetwork" />
      <meta
        name="twitter:title"
        content="EnReach Network | Earn Real Income by Sharing Idle Internet to Power AI"
      />
      <meta
        name="twitter:description"
        content="Turn unused bandwidth into income. Join EnReach’s decentralized edge cloud, run a node, earn $REACH tokens, and fuel real-time AI delivery."
      />
      <meta
        name="twitter:image"
        content="https://enreach.network/metadata-img.jpg"
      />

      <meta
        property="og:title"
        content="EnReach Network | Earn Real Income by Sharing Idle Internet to Power AI"
      />
      <meta
        property="og:description"
        content="Turn unused bandwidth into income. Join EnReach’s decentralized edge cloud, run a node, earn $REACH tokens, and fuel real-time AI delivery."
      />
      <meta
        property="og:image"
        content="https://enreach.network/metadata-img.jpg"
      />
      <meta property="og:url" content="https://enreach.network/" />
      <meta property="og:type" content="website" />

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
