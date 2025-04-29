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
        content="PrismaX | A Base Layer for Real-World Robotics Intelligence"
      ></meta>
      <meta
        name="description"
        content="PrismaX | A Base Layer for Real-World Robotics Intelligence"
      />

      <meta
        name="twitter:image"
        content="https://dev-home.prismax.ai/thumbnail.png"
      ></meta>

      <meta
        name="description"
        content="PrismaX | A Base Layer for Real-World Robotics Intelligence"
      />
      <meta
        property="og:title"
        content="The PrismaX Ecosystem is the foundational layer for Real-World Robotics Intelligence "
      />
      <meta
        property="og:description"
        content="PrismaX | A Base Layer for Real-World Robotics Intelligence"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dev-home.prismax.ai" />
      <meta
        property="og:image"
        content="https://dev-home.prismax.ai/thumbnail.png"
      />
      <meta property="og:image:alt" content="Default image description" />
      <meta
        property="og:site_name"
        content="The PrismaX Ecosystem is the foundational layer for Real-World Robotics Intelligence "
      />

      <meta
        data-rh="true"
        property="og:description"
        content="PrismaX | A Base Layer for Real-World Robotics Intelligence"
      ></meta>

      <meta
        name="twitter:title"
        content="The PrismaX Ecosystem is the foundational layer for Real-World Robotics Intelligence "
      ></meta>
      <meta
        name="twitter:description"
        content="PrismaX | A Base Layer for Real-World Robotics Intelligence"
      ></meta>
      <meta name="twitter:site" content="@PrismaXai/"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta
        name="twitter:image"
        content="https://dev-home.prismax.ai/thumbnail.png"
      ></meta>

   
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
