import { Error } from "@gespenst/ui/error";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Error> = {
  argTypes: {},
  component: Error,
  title: "UI/Error",
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    children: "Error",
  },
};

export const Large: Story = {
  args: {
    children: "Error",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    children: "Error",
    size: "small",
  },
};

export const WithLabel: Story = {
  args: {
    children: "Error",
    label: "Label",
  },
};

export const WithError: Story = {
  args: {
    error: {
      action: "Action",
      label: "Label",
      link: "https://github.com/dontfred",
      message: "Message",
    },
  },
};
