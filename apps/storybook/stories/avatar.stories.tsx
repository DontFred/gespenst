import { Avatar } from "@gespenst/ui/avatar";
import React from "react";

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
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <Avatar
        fallback="DF"
        name="dontfred"
        src="https://avatars.githubusercontent.com/u/1"
      />
      <Avatar fallback="DF" name="dontfred" src="No valid URL" />
      <Avatar placeholder={true} />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    fallback: "DF",
    name: "dontfred",
    src: "https://avatars.githubusercontent.com/u/1",
  },
};

export const Fallback: Story = {
  args: {
    fallback: "DF",
    name: "dontfred",
    src: "No valid URL",
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: true,
  },
};
