import { AvatarGroup } from "@gespenst/ui/avatar";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AvatarGroup> = {
  argTypes: {},
  component: AvatarGroup,
  title: "UI/AvatarGroup",
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {},
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "1rem",
      }}
    >
      <AvatarGroup
        members={[
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/1.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/3.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/4.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/5.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/6.png",
          },
        ]}
      />
      <AvatarGroup
        limit={3}
        members={[
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/1.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/3.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/4.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/5.png",
          },
          {
            fallback: "DF",
            name: "dontfred",
            src: "https://github.com/6.png",
          },
        ]}
      />
    </div>
  ),
};
