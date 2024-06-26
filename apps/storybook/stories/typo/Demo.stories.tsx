import { Table, TBody, TD, Text, TH, THead, TR } from "@gespenst/ui/text";
import React from "react";

import type { Meta } from "@storybook/react";

const meta: Meta = {
  argTypes: {},
  component: Text,
  title: "Typo/Demo",
};

export default meta;

export const Demo = (): JSX.Element => (
  <div>
    <Text heading size="h1">
      The Joke Tax Chronicles
    </Text>
    <Text paragraph>
      Once upon a time, in a far-off land, there was a very lazy king who spent
      all day lounging on his throne. One day, his advisors came to him with a
      problem: the kingdom was running out of money.
    </Text>
    <Text heading size="h2">
      The King's Plan
    </Text>
    <Text paragraph>
      The king thought long and hard, and finally came up with{" "}
      <a
        className="text-primary font-medium underline underline-offset-4"
        href="#"
      >
        a brilliant plan
      </a>
      : he would tax the jokes in the kingdom.
    </Text>
    <Text blockquote>
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </Text>
    <Text heading size="h3">
      The Joke Tax
    </Text>
    <Text paragraph>
      The king's subjects were not amused. They grumbled and complained, but the
      king was firm:
    </Text>
    <Text list>
      <Text listItem>1st level of puns: 5 gold coins</Text>
      <Text listItem>2nd level of jokes: 10 gold coins</Text>
      <Text listItem>3rd level of one-liners : 20 gold coins</Text>
    </Text>
    <Text paragraph>
      As a result, people stopped telling jokes, and the kingdom fell into a
      gloom. But there was one person who refused to let the king's foolishness
      get him down: a court jester named Jokester.
    </Text>
    <Text heading size="h3">
      Jokester's Revolt
    </Text>
    <Text paragraph>
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester.
    </Text>
    <Text paragraph>
      And then, one day, the people of the kingdom discovered that the jokes
      left by Jokester were so funny that they couldn't help but laugh. And once
      they started laughing, they couldn't stop.
    </Text>
    <Text heading size="h3">
      The People's Rebellion
    </Text>
    <Text paragraph>
      The people of the kingdom, feeling uplifted by the laughter, started to
      tell jokes and puns again, and soon the entire kingdom was in on the joke.
    </Text>
    <div className="my-6 w-full overflow-y-auto">
      <Table>
        <THead>
          <TR>
            <TH>King's Treasury</TH>
            <TH>People's happiness</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Empty</TD>
            <TD>Overflowing</TD>
          </TR>
          <TR>
            <TD>Modest</TD>
            <TD>Satisfied</TD>
          </TR>
          <TR>
            <TD>Full</TD>
            <TD>Ecstatic</TD>
          </TR>
        </TBody>
      </Table>
    </div>
    <Text paragraph>
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax. Jokester was declared a hero, and the
      kingdom lived happily ever after.
    </Text>
    <Text paragraph>
      The moral of the story is: undefined underestimate the power of a good
      laugh and always be careful of bad ideas.
    </Text>
  </div>
);
