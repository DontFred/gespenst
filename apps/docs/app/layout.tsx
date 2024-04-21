import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "../styles/globals.css";
import "@gespenst/ui/dist/style.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
