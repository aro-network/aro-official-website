import type { Metadata } from "next";
import { Albert_Sans, Alexandria } from "next/font/google";


import "./globals.css";
import { Toaster } from "sonner";
import classNames from "classnames";



export const metadata: Metadata = {
  title: "Enreach Network",
  description: " Enreach Network",
};

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
});

const alexandria = Alexandria({
  subsets: ['latin'],
  variable: '--font-alexandria',
});

const fonts = [albertSans, alexandria]

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
      <body
        className={classNames(fonts.map(item => item.variable).join(" "), "font-Alexandria")}
      >
        <Toaster position='top-center' />

        {children}
      </body>
    </html>
  );
}
