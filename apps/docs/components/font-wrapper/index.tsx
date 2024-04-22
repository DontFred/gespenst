/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { GeistMono, GeistSans } from "@gespenst/ui/font-geist";

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
