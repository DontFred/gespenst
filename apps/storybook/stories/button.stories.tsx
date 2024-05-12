import { Button } from "@gespenst/ui/button";
import { Icon } from "@gespenst/ui/icon";
import React, { Fragment } from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  argTypes: {
    isDisabled: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
    shape: {
      control: {
        options: ["angular", "rounded"],
        type: "select",
      },
      table: {
        defaultValue: { summary: "angular" },
      },
    },
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

export const Default: Story = {
  args: {
    children: "Upload",
  },
  render: (props) => (
    <div style={{ display: "grid", gap: "30px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={props.children} size={"small"} variant={"primary"} />
        <Button children={props.children} size={"normal"} variant={"primary"} />
        <Button children={props.children} size={"large"} variant={"primary"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          children={props.children}
          size={"small"}
          variant={"secondary"}
        />
        <Button
          children={props.children}
          size={"normal"}
          variant={"secondary"}
        />
        <Button
          children={props.children}
          size={"large"}
          variant={"secondary"}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={props.children} size={"small"} variant={"tertiary"} />
        <Button
          children={props.children}
          size={"normal"}
          variant={"tertiary"}
        />
        <Button children={props.children} size={"large"} variant={"tertiary"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={props.children} size={"small"} variant={"info"} />
        <Button children={props.children} size={"normal"} variant={"info"} />
        <Button children={props.children} size={"large"} variant={"info"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={props.children} size={"small"} variant={"error"} />
        <Button children={props.children} size={"normal"} variant={"error"} />
        <Button children={props.children} size={"large"} variant={"error"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={props.children} size={"small"} variant={"warning"} />
        <Button children={props.children} size={"normal"} variant={"warning"} />
        <Button children={props.children} size={"large"} variant={"warning"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={props.children} isDisabled size={"small"} />
        <Button children={props.children} isDisabled size={"normal"} />
        <Button children={props.children} isDisabled size={"large"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={props.children} loading size={"small"} />
        <Button children={props.children} loading size={"normal"} />
        <Button children={props.children} loading size={"large"} />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          children={props.children}
          prefix={<Icon name="arrow-left" />}
          size={"small"}
        />
        <Button
          children={props.children}
          prefix={<Icon name="arrow-left" />}
          size={"normal"}
        />
        <Button
          children={props.children}
          prefix={<Icon name="arrow-left" />}
          size={"large"}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          children={props.children}
          size={"small"}
          suffix={<Icon name="arrow-right" />}
        />
        <Button
          children={props.children}
          size={"normal"}
          suffix={<Icon name="arrow-right" />}
        />
        <Button
          children={props.children}
          size={"large"}
          suffix={<Icon name="arrow-right" />}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          children={props.children}
          shape={"rounded"}
          size={"normal"}
          variant={"primary"}
        />
        <Button
          children={props.children}
          shape={"rounded"}
          size={"normal"}
          variant={"secondary"}
        />
        <Button
          children={props.children}
          shape={"rounded"}
          size={"normal"}
          variant={"tertiary"}
        />
        <Button
          children={props.children}
          shape={"rounded"}
          size={"normal"}
          variant={"info"}
        />
        <Button
          children={props.children}
          shape={"rounded"}
          size={"normal"}
          variant={"error"}
        />
        <Button
          children={props.children}
          shape={"rounded"}
          size={"normal"}
          variant={"warning"}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button children={<Icon name="arrow-up" />} size={"xsmall"} svgOnly />
        <Button children={<Icon name="arrow-up" />} size={"small"} svgOnly />
        <Button children={<Icon name="arrow-up" />} size={"normal"} svgOnly />
        <Button children={<Icon name="arrow-up" />} size={"large"} svgOnly />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          children={<Icon name="arrow-up" />}
          shape={"rounded"}
          size={"xsmall"}
          svgOnly
        />
        <Button
          children={<Icon name="arrow-up" />}
          shape={"rounded"}
          size={"small"}
          svgOnly
        />
        <Button
          children={<Icon name="arrow-up" />}
          shape={"rounded"}
          size={"normal"}
          svgOnly
        />
        <Button
          children={<Icon name="arrow-up" />}
          shape={"rounded"}
          size={"large"}
          svgOnly
        />
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    children: "Upload",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    children: "Upload",
    variant: "secondary",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Tertiary: Story = {
  args: {
    children: "Upload",
    variant: "tertiary",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Info: Story = {
  args: {
    children: "Upload",
    variant: "info",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Warning: Story = {
  args: {
    children: "Upload",
    variant: "warning",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Error: Story = {
  args: {
    children: "Upload",
    variant: "error",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Upload",
    isDisabled: true,
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: "Upload",
    loading: true,
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    children: "Upload",
    shape: "rounded",
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Prefix: Story = {
  args: {
    children: "Upload",
    prefix: <Icon name="arrow-left" />,
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const Suffix: Story = {
  args: {
    children: "Upload",
    suffix: <Icon name="arrow-right" />,
  },
  render: (props) => (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button {...props} size={"small"} />
      <Button {...props} size={"normal"} />
      <Button {...props} size={"large"} />
    </div>
  ),
};

export const SvgOnly: Story = {
  args: {
    children: <Icon className="h-4 w-4" name="arrow-up-diagonal-scale" />,
  },
  render: (props) => {
    const { prefix, suffix, ...rest } = props;
    if (prefix !== undefined) return <div />;
    if (suffix !== undefined) return <div />;
    return (
      <Fragment>
        <div style={{ display: "grid", gap: "10px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button {...rest} size={"xsmall"} svgOnly />
            <Button {...rest} size={"small"} svgOnly />
            <Button {...rest} size={"normal"} svgOnly />
            <Button {...rest} size={"large"} svgOnly />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button {...rest} shape={"rounded"} size={"xsmall"} svgOnly />
            <Button {...rest} shape={"rounded"} size={"small"} svgOnly />
            <Button {...rest} shape={"rounded"} size={"normal"} svgOnly />
            <Button {...rest} shape={"rounded"} size={"large"} svgOnly />
          </div>
        </div>
      </Fragment>
    );
  },
};
