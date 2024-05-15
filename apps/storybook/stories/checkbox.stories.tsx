import { Checkbox } from "@gespenst/ui/checkbox";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  argTypes: {},
  component: Checkbox,
  title: "UI/Checkbox",
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    children: "Checkbox",
    defaultSelected: true,
  },
};

export const Indeterminate: Story = {
  args: {
    children: "Checkbox",
    isIndeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Checkbox",
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: "Checkbox",
    defaultSelected: true,
    isDisabled: true,
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    children: "Checkbox",
    isDisabled: true,
    isIndeterminate: true,
  },
};
