import { Toggle } from "@gespenst/ui/toggle";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  argTypes: {},
  component: Toggle,
  title: "UI/Toggle",
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const LargeDisabled: Story = {
  args: {
    isDisabled: true,
    size: "large",
  },
};

export const DisabledSelected: Story = {
  args: {
    isDisabled: true,
    isSelected: true,
  },
};
