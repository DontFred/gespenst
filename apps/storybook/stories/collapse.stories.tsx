import { Button } from "@gespenst/ui/button";
import {
  Collapse,
  CollapseContent,
  CollapseItem,
  CollapseTrigger,
} from "@gespenst/ui/collapse";
import { Text } from "@gespenst/ui/text";
import React, { Fragment, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Collapse> = {
  argTypes: {
    children: {
      control: "check",
    },
    collapsible: {
      control: "boolean",
      description:
        "If the collapse can be collapsed, when double clicking. (When the type is 'single')",
    },
    defaultValue: {
      control: "select",
      description: "The block that is expanded on render.",
      options: ["question-a", "question-b"],
    },
    size: {
      control: "select",
      description: "The size of the collapse header.",
      options: ["default", "small"],
    },
    type: {
      control: "select",
      description:
        "To select if the collapse can be expanded multiple times or just one can be expanded.",
      options: ["single", "multiple"],
    },
  },
  component: Collapse,
  title: "UI/Collapse",
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
  args: {
    children: (
      <Fragment>
        <CollapseItem value="question-a">
          <CollapseTrigger>Question A</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
        <CollapseItem value="question-b">
          <CollapseTrigger>Question B</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
      </Fragment>
    ),
  },
};

export const Small: Story = {
  args: {
    children: (
      <Fragment>
        <CollapseItem value="question-a">
          <CollapseTrigger>Question A</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
        <CollapseItem value="question-b">
          <CollapseTrigger>Question B</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
      </Fragment>
    ),
    size: "small",
  },
};

export const DefaultValue: Story = {
  args: {
    children: (
      <Fragment>
        <CollapseItem value="question-a">
          <CollapseTrigger>Question A</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
        <CollapseItem value="question-b">
          <CollapseTrigger>Question B</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
      </Fragment>
    ),
    defaultValue: "question-a",
  },
};

/**
 * @returns The story component.
 */
function ControledCollabse(): JSX.Element {
  const [value, setValue] = useState<string[] | undefined>(undefined);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Collapse
        onValueChange={(newValue) => setValue(newValue)}
        type="multiple"
        value={value}
      >
        <CollapseItem value="question-a">
          <CollapseTrigger>Question A</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
        <CollapseItem value="question-b">
          <CollapseTrigger>Question B</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
      </Collapse>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          margin: "0 auto",
        }}
      >
        <Button
          onClick={() => {
            setValue(["question-b"]);
          }}
        >
          Toggle{" "}
          <Text mono paragraph>
            "question-b"
          </Text>
        </Button>
        <Button
          onClick={() => {
            setValue(["question-a"]);
          }}
        >
          Toggle{" "}
          <Text mono paragraph>
            "question-a"
          </Text>
        </Button>
        <Button
          onClick={() => {
            setValue(["question-a", "question-b"]);
          }}
        >
          Toggle{" "}
          <Text mono paragraph>
            "question-a" <br />
            "question-b"
          </Text>
        </Button>
        <Button
          onClick={() => {
            setValue(undefined);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export const Controled: Story = {
  render: ControledCollabse,
};

export const Collapsible: Story = {
  args: {
    children: (
      <Fragment>
        <CollapseItem value="question-a">
          <CollapseTrigger>Question A</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
        <CollapseItem value="question-b">
          <CollapseTrigger>Question B</CollapseTrigger>
          <CollapseContent>
            <Text paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum est placeat, animi explicabo corrupti voluptas modi
              possimus eius dolor itaque, fugiat temporibus magnam repudiandae
              perspiciatis adipisci exercitationem quod rem.
            </Text>
          </CollapseContent>
        </CollapseItem>
      </Fragment>
    ),
    collapsible: true,
  },
};
