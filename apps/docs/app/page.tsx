import { Button } from "@gespenst/ui/button";
import { Icon } from "@gespenst/ui/icon";

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
    </main>
  );
}
