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
  subsets: ['latin'],
  weight: ['400',],
  variable: '--font-ubuntu',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400',],
  variable: '--font-poppins',
})

const fonts = [ubuntu, poppins]


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <title>
        EnReach Network | Earn Real Income by Sharing Idle Internet to Power AI
      </title>

      <link rel="icon" href="/icon.svg" />
      <meta name="description" content="Turn unused bandwidth into income. Join EnReach’s decentralized edge cloud, run a node, earn $REACH tokens, and fuel real-time AI delivery." />
      <link rel="canonical" href="http://enreach.network/" />

      <body
        className={classNames(fonts.map(item => item.variable).join(" "), "font-Poppins")}
      >
        <Toaster position='top-center' />

        {children}
      </body>
    </html>
  );
}
