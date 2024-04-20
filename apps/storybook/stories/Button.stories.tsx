import { Button } from "@gespenst/ui/button";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    children: "Hello",
    style: {
      border: "1px solid gray",
      borderRadius: 10,
      color: "blue",
      padding: 10,
    },
    type: "button",
  },
  name: "Button",
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello
    </Button>
  ),
};
