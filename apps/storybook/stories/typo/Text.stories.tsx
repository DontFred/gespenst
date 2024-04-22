import { Text } from "@gespenst/ui/text";
import React, { Fragment } from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  argTypes: {
    blockquote: {
      control: "boolean",
      description: "Change text to blockquote style",
    },
    code: {
      control: "boolean",
      description: "Change text to inline code style",
    },
    description: {
      control: "boolean",
      description: "Change text to description style",
    },
    heading: {
      control: "boolean",
      description: "Change text to heading style",
    },
    large: {
      control: "boolean",
      description: "Change text to large style",
    },
    lead: {
      control: "boolean",
      description: "Change text to lead style",
    },
    list: {
      control: "boolean",
      description: "Change text to list style",
    },
    listItem: {
      control: "boolean",
      description: "Change text to list item style",
    },
    mono: {
      control: "boolean",
      description: "Change font to monospace style",
    },
    muted: {
      control: "boolean",
      description: "Change text to muted style",
    },
    paragraph: {
      control: "boolean",
      description: "Change text to paragraph style",
    },
    size: {
      control: { type: "radio" },
      options: ["h1", "h2", "h3", "h4"],
    },
    small: {
      control: "boolean",
      description: "Change text to small style",
    },
  },
  component: Text,
  title: "Typo/Text",
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    children: "The Joke Tax Chronicles",
    heading: true,
    size: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "The Joke Tax Chronicles",
    heading: true,
    size: "h2",
  },
};

export const Heading3: Story = {
  args: {
    children: "The Joke Tax Chronicles",
    heading: true,
    size: "h3",
  },
};

export const Heading4: Story = {
  args: {
    children: "The Joke Tax Chronicles",
    heading: true,
    size: "h4",
  },
};

export const Paragraph: Story = {
  args: {
    children:
      "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
    paragraph: true,
  },
};

export const Blockquote: Story = {
  args: {
    blockquote: true,
    children:
      "After all, he said, everyone enjoys a good joke, so it's only fair that they should pay for the privilege.",
  },
};

export const Description1: Story = {
  args: {
    children:
      "The Joke Tax Chronicles is a collection of stories about a king who decides to tax his subjects for telling jokes.",
    description: true,
    size: "h1",
  },
};

export const Description2: Story = {
  args: {
    children:
      "The Joke Tax Chronicles is a collection of stories about a king who decides to tax his subjects for telling jokes.",
    description: true,
    size: "h2",
  },
};

export const Description3: Story = {
  args: {
    children:
      "The Joke Tax Chronicles is a collection of stories about a king who decides to tax his subjects for telling jokes.",
    description: true,
    size: "h3",
  },
};

export const Description4: Story = {
  args: {
    children:
      "The Joke Tax Chronicles is a collection of stories about a king who decides to tax his subjects for telling jokes.",
    description: true,
    size: "h4",
  },
};

export const InlineCode: Story = {
  args: {
    children: "bun add @gespenst/ui",
    code: true,
  },
};

export const Large: Story = {
  args: {
    children: "The People's Rebellion",
    large: true,
  },
};

export const Lead: Story = {
  args: {
    children:
      "The Joke Tax Chronicles is a collection of stories about a king who decides to tax his subjects for telling jokes.",
    lead: true,
  },
};

export const List: Story = {
  args: {
    children: (
      <Fragment>
        <Text listItem>1st level of puns: 5 gold coins</Text>
        <Text listItem>2nd level of jokes: 10 gold coins</Text>
        <Text listItem>3rd level of one-liners : 20 gold coins</Text>
      </Fragment>
    ),
    list: true,
  },
};

export const ListItem: Story = {
  args: {
    children: "1st level of puns: 5 gold coins",
    listItem: true,
  },
};

export const Muted: Story = {
  args: {
    children:
      "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.",
    muted: true,
  },
};

export const Small: Story = {
  args: {
    children:
      "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.",
    small: true,
  },
};
