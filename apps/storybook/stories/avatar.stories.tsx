import { Avatar } from "@gespenst/ui/avatar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  argTypes: {},
  component: Avatar,
  title: "UI/Avatar",
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};
