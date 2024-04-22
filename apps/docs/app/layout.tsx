import { GeistMono } from "@gespenst/ui/font-geist";
import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";

import "../styles/globals.css";
import "@gespenst/ui/dist/style.css";

export const metadata: Metadata = {
  description:
    "Scary UI Library for Next.js or any other React based framework.",
  title: "Gespenst - Ge·spenst [/Gespénst/]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className="dark" lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
