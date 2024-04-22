import { Table, TBody, TD, TH, THead, TR } from "@gespenst/ui/text";
import React, { Fragment } from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  argTypes: {},
  component: Table,
  title: "Typo/Table",
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <Fragment>
        <THead>
          <TR>
            <TH>King's Treasury</TH>
            <TH>People's happiness</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Empty</TD>
            <TD>Overflowing</TD>
          </TR>
          <TR>
            <TD>Modest</TD>
            <TD>Satisfied</TD>
          </TR>
          <TR>
            <TD>Full</TD>
            <TD>Ecstatic</TD>
          </TR>
        </TBody>
      </Fragment>
    ),
  },
};
