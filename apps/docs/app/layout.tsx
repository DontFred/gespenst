import { GeistMono, GeistSans } from "@gespenst/ui/font-geist";
import Provider from "@gespenst/ui/provider";

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
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
