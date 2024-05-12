import { Badge } from "@gespenst/ui/badge";
import { Button } from "@gespenst/ui/button";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  argTypes: {},
  component: Badge,
  title: "UI/Badge",
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    content: "Badge",
  },
  render: ({ content }) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" />
        <Badge content={content} />
        <Badge content={content} size="large" />
        <Badge content={content} size="small" variant={"gray-subtle"} />
        <Badge content={content} variant={"gray-subtle"} />
        <Badge content={content} size="large" variant={"gray-subtle"} />
        <Badge content={content} icon={"shield"} size="small" />
        <Badge content={content} icon={"shield"} />
        <Badge content={content} icon={"shield"} size="large" />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"blue"} />
        <Badge content={content} variant={"blue"} />
        <Badge content={content} size="large" variant={"blue"} />
        <Badge content={content} size="small" variant={"blue-subtle"} />
        <Badge content={content} variant={"blue-subtle"} />
        <Badge content={content} size="large" variant={"blue-subtle"} />
        <Badge
          content={content}
          icon={"shield"}
          size="small"
          variant={"blue"}
        />
        <Badge content={content} icon={"shield"} variant={"blue"} />
        <Badge
          content={content}
          icon={"shield"}
          size="large"
          variant={"blue"}
        />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"purple"} />
        <Badge content={content} variant={"purple"} />
        <Badge content={content} size="large" variant={"purple"} />
        <Badge content={content} size="small" variant={"purple-subtle"} />
        <Badge content={content} variant={"purple-subtle"} />
        <Badge content={content} size="large" variant={"purple-subtle"} />
        <Badge
          content={content}
          icon={"shield"}
          size="small"
          variant={"purple"}
        />
        <Badge content={content} icon={"shield"} variant={"purple"} />
        <Badge
          content={content}
          icon={"shield"}
          size="large"
          variant={"purple"}
        />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"amber"} />
        <Badge content={content} variant={"amber"} />
        <Badge content={content} size="large" variant={"amber"} />
        <Badge content={content} size="small" variant={"amber-subtle"} />
        <Badge content={content} variant={"amber-subtle"} />
        <Badge content={content} size="large" variant={"amber-subtle"} />
        <Badge
          content={content}
          icon={"shield"}
          size="small"
          variant={"amber"}
        />
        <Badge content={content} icon={"shield"} variant={"amber"} />
        <Badge
          content={content}
          icon={"shield"}
          size="large"
          variant={"amber"}
        />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"red"} />
        <Badge content={content} variant={"red"} />
        <Badge content={content} size="large" variant={"red"} />
        <Badge content={content} size="small" variant={"red-subtle"} />
        <Badge content={content} variant={"red-subtle"} />
        <Badge content={content} size="large" variant={"red-subtle"} />
        <Badge content={content} icon={"shield"} size="small" variant={"red"} />
        <Badge content={content} icon={"shield"} variant={"red"} />
        <Badge content={content} icon={"shield"} size="large" variant={"red"} />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"pink"} />
        <Badge content={content} variant={"pink"} />
        <Badge content={content} size="large" variant={"pink"} />
        <Badge content={content} size="small" variant={"pink-subtle"} />
        <Badge content={content} variant={"pink-subtle"} />
        <Badge content={content} size="large" variant={"pink-subtle"} />
        <Badge
          content={content}
          icon={"shield"}
          size="small"
          variant={"pink"}
        />
        <Badge content={content} icon={"shield"} variant={"pink"} />
        <Badge
          content={content}
          icon={"shield"}
          size="large"
          variant={"pink"}
        />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"green"} />
        <Badge content={content} variant={"green"} />
        <Badge content={content} size="large" variant={"green"} />
        <Badge content={content} size="small" variant={"green-subtle"} />
        <Badge content={content} variant={"green-subtle"} />
        <Badge content={content} size="large" variant={"green-subtle"} />
        <Badge
          content={content}
          icon={"shield"}
          size="small"
          variant={"green"}
        />
        <Badge content={content} icon={"shield"} variant={"green"} />
        <Badge
          content={content}
          icon={"shield"}
          size="large"
          variant={"green"}
        />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"teal"} />
        <Badge content={content} variant={"teal"} />
        <Badge content={content} size="large" variant={"teal"} />
        <Badge content={content} size="small" variant={"teal-subtle"} />
        <Badge content={content} variant={"teal-subtle"} />
        <Badge content={content} size="large" variant={"teal-subtle"} />
        <Badge
          content={content}
          icon={"shield"}
          size="small"
          variant={"teal"}
        />
        <Badge content={content} icon={"shield"} variant={"teal"} />
        <Badge
          content={content}
          icon={"shield"}
          size="large"
          variant={"teal"}
        />
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge content={content} size="small" variant={"inverted"} />
        <Badge content={content} variant={"inverted"} />
        <Badge content={content} size="large" variant={"inverted"} />
        <Badge
          content={content}
          icon={"shield"}
          size="small"
          variant={"inverted"}
        />
        <Badge content={content} icon={"shield"} variant={"inverted"} />
        <Badge
          content={content}
          icon={"shield"}
          size="large"
          variant={"inverted"}
        />
      </div>
      <div>
        <Badge content={content} size="small" variant={"gray"}>
          <Button>Click me!</Button>
        </Badge>
      </div>
    </div>
  ),
};

export const Gray: Story = {
  args: {
    content: "Badge",
    variant: "gray",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const GraySubtle: Story = {
  args: {
    content: "Badge",
    variant: "gray-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Blue: Story = {
  args: {
    content: "Badge",
    variant: "blue",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const BlueSubtle: Story = {
  args: {
    content: "Badge",
    variant: "blue-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Purple: Story = {
  args: {
    content: "Badge",
    variant: "purple",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const PurpleSubtle: Story = {
  args: {
    content: "Badge",
    variant: "purple-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Amber: Story = {
  args: {
    content: "Badge",
    variant: "amber",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const AmberSubtle: Story = {
  args: {
    content: "Badge",
    variant: "amber-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Red: Story = {
  args: {
    content: "Badge",
    variant: "red",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const RedSubtle: Story = {
  args: {
    content: "Badge",
    variant: "red-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Pink: Story = {
  args: {
    content: "Badge",
    variant: "pink",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const PinkSubtle: Story = {
  args: {
    content: "Badge",
    variant: "pink-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Green: Story = {
  args: {
    content: "Badge",
    variant: "green",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const GreenSubtle: Story = {
  args: {
    content: "Badge",
    variant: "green-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Teal: Story = {
  args: {
    content: "Badge",
    variant: "teal",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const TealSubtle: Story = {
  args: {
    content: "Badge",
    variant: "teal-subtle",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const Inverted: Story = {
  args: {
    content: "Badge",
    variant: "inverted",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small">
        <Button>Click me!</Button>
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    content: "Badge",
    icon: "shield",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small" />
      <Badge {...props} />
      <Badge {...props} size="large" />
    </div>
  ),
};

export const WithChild: Story = {
  args: {
    content: "Badge",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Badge {...props} size="small">
        <Button>Click me!</Button>
      </Badge>
    </div>
  ),
};
