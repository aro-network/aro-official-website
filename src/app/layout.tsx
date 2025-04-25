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
        Enreach Network
      </title>
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
      <meta name="description" content="Sign up to be the first to get updates. Email. Sign up-test." />
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
