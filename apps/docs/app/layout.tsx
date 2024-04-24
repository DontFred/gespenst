import { GeistMono, GeistSans } from "@gespenst/ui/font-geist";

import type { Metadata } from "next";

import "@gespenst/ui/dist/style.css";
import "../styles/globals.css";

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
