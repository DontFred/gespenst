import { Card } from "@gespenst/ui/card";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  argTypes: {},
  component: Card,
  title: "UI/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};
