import { Skeleton } from "@gespenst/ui/skeleton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Skeleton> = {
  argTypes: {},
  component: Skeleton,
  title: "UI/Skeleton",
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: {
    children: "Skeleton",
  },
};

export const WithShow: Story = {
  args: {
    children: "Skeleton",
    show: false,
  },
};

export const WithBoxHeight: Story = {
  args: {
    boxHeight: 100,
  },
};

export const WithHeight: Story = {
  args: {
    height: 100,
  },
};

export const WithRounded: Story = {
  args: {
    rounded: true,
  },
};

export const WithAngular: Story = {
  args: {
    angular: true,
  },
};

export const WithoutAnimation: Story = {
  args: {
    animated: false,
  },
};
