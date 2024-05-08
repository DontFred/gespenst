import { Button } from "@gespenst/ui/button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  argTypes: {
    size: {
      control: {
        options: ["large", "normal", "small"],
        type: "select",
      },
      table: {
        defaultValue: { summary: "normal" },
      },
    },
    variant: {
      control: {
        options: [
          "primary",
          "secondary",
          "tertiary",
          "info",
          "warning",
          "error",
        ],
        type: "select",
      },
      table: {
        defaultValue: { summary: "primary" },
      },
    },
  },
  component: Button,
  title: "UI/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Upload",
  },
};

export const Secondary: Story = {
  args: {
    children: "Upload",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Upload",
    variant: "tertiary",
  },
};

export const Info: Story = {
  args: {
    children: "Upload",
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    children: "Upload",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Upload",
    variant: "error",
  },
};

export const Large: Story = {
  args: {
    children: "Upload",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    children: "Upload",
    size: "small",
  },
};
