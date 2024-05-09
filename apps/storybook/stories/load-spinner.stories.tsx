import { LoadSpinner } from "@gespenst/ui/load-spinner";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadSpinner> = {
  argTypes: {},
  component: LoadSpinner,
  title: "UI/LoadSpinner",
};

export default meta;

type Story = StoryObj<typeof LoadSpinner>;

export const Default: Story = {
  args: {},
};
