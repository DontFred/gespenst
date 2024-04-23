import { Button } from "@gespenst/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className={"bg-background grid h-screen place-items-center"}>
      <Button className=" lg:border-red-500">Click me</Button>
    </main>
  );
}
