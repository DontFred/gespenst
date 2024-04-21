import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

/**
 * FontWrapper
 * @param fontwrapper = Has no parameters, just children
 * @param fontwrapper.children = The children of the component
 * @returns JSX.Element
 */
export default function FontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
      {children}
    </main>
  );
}
