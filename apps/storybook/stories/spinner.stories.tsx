import { Spinner } from "@gespenst/ui/spinner";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Spinner> = {
  argTypes: {},
  component: Spinner,
  title: "UI/Spinner",
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
