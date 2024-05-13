import { Button } from "@gespenst/ui/button";
import { Popover, PopoverTrigger } from "@gespenst/ui/popover";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  argTypes: {},
  component: Popover,
  title: "UI/Popover",
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
  render: () => (
    <PopoverTrigger>
      <Button>Click me!</Button>
      <Popover
        style={{
          padding: "1rem",
        }}
      >
        <div>This is a popover!</div>
      </Popover>
    </PopoverTrigger>
  ),
};
