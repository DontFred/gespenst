"use client";

import { Avatar } from "@gespenst/ui/avatar";
import { Button } from "@gespenst/ui/button";
import { Icon } from "@gespenst/ui/icon";
import { Text, TypographyP } from "@gespenst/ui/text";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Page(): JSX.Element {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.textContent);
    }
  }, []);
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
      <Avatar
        className="h-80 w-80"
        name="John Doe"
        NextImage={Image}
        src="https://images.unsplash.com/photo-1714911463647-c3150ce15ad1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TypographyP paragraph>Hello World</TypographyP>
      <Text paragraph ref={ref}>
        Hello World
      </Text>
    </main>
  );
}
