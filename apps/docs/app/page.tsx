"use client";

import { Button } from "@gespenst/ui/button";
import { Icon } from "@gespenst/ui/icon";
// import Image from "next/image";

export default function Page(): JSX.Element {
  return (
    <main className={"bg-background grid h-screen place-items-center"}>
      <Button className="lg:border-red-500">Click me</Button>
      <Icon
        className="h-10 w-10"
        containerClassName="text-lg"
        name="logo-turbopack"
      >
        Bitbucket
      </Icon>
      {/* <Image
        alt="Hello"
        fill
        src={
          "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      /> */}
    </main>
  );
}
