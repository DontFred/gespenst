import { Card } from "@gespenst/ui/card";
import { Text } from "@gespenst/ui/text";
import React, { Fragment } from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  argTypes: {
    padding: {
      control: {
        options: ["large", "none", "normal"],
        type: "select",
      },
      table: {
        defaultValue: { summary: "normal" },
      },
    },
    rounded: {
      control: {
        options: ["large", "none", "normal", "small", "xsmall"],
        type: "select",
      },
      table: {
        defaultValue: { summary: "normal" },
      },
    },
  },
  component: Card,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
        }}
      >
        <Story />
      </div>
    ),
  ],
  title: "UI/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <Fragment>
        <Text heading size="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text description size="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum
          incidunt qui cupiditate quibusdam. At, reiciendis? Dolore quidem
          temporibus accusamus enim iure delectus ab. Deleniti consequuntur
          deserunt soluta quisquam cum.
        </Text>
      </Fragment>
    ),
  },
};

export const Roundedlarge: Story = {
  args: {
    children: (
      <Fragment>
        <Text heading size="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text description size="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum
          incidunt qui cupiditate quibusdam. At, reiciendis? Dolore quidem
          temporibus accusamus enim iure delectus ab. Deleniti consequuntur
          deserunt soluta quisquam cum.
        </Text>
      </Fragment>
    ),
    rounded: "large",
  },
};

export const RoundedNone: Story = {
  args: {
    children: (
      <Fragment>
        <Text heading size="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text description size="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum
          incidunt qui cupiditate quibusdam. At, reiciendis? Dolore quidem
          temporibus accusamus enim iure delectus ab. Deleniti consequuntur
          deserunt soluta quisquam cum.
        </Text>
      </Fragment>
    ),
    rounded: "none",
  },
};

export const RoundedSmall: Story = {
  args: {
    children: (
      <Fragment>
        <Text heading size="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text description size="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum
          incidunt qui cupiditate quibusdam. At, reiciendis? Dolore quidem
          temporibus accusamus enim iure delectus ab. Deleniti consequuntur
          deserunt soluta quisquam cum.
        </Text>
      </Fragment>
    ),
    rounded: "small",
  },
};

export const RoundedXSmall: Story = {
  args: {
    children: (
      <Fragment>
        <Text heading size="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text description size="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum
          incidunt qui cupiditate quibusdam. At, reiciendis? Dolore quidem
          temporibus accusamus enim iure delectus ab. Deleniti consequuntur
          deserunt soluta quisquam cum.
        </Text>
      </Fragment>
    ),
    rounded: "xsmall",
  },
};

export const Paddinglarge: Story = {
  args: {
    children: (
      <Fragment>
        <Text heading size="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text description size="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum
          incidunt qui cupiditate quibusdam. At, reiciendis? Dolore quidem
          temporibus accusamus enim iure delectus ab. Deleniti consequuntur
          deserunt soluta quisquam cum.
        </Text>
      </Fragment>
    ),
    padding: "large",
  },
};

export const PaddingNone: Story = {
  args: {
    children: (
      <Fragment>
        <Text heading size="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text description size="h4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsum
          incidunt qui cupiditate quibusdam. At, reiciendis? Dolore quidem
          temporibus accusamus enim iure delectus ab. Deleniti consequuntur
          deserunt soluta quisquam cum.
        </Text>
      </Fragment>
    ),
    padding: "none",
  },
};
