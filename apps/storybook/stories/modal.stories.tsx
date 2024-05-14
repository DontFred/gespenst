import { Button } from "@gespenst/ui/button";
import {
  Modal,
  ModalActions,
  ModalBody,
  ModalHeader,
  ModalInset,
  ModalSubtitle,
  ModalTitle,
  ModalTrigger,
} from "@gespenst/ui/modal";
import { Text } from "@gespenst/ui/text";
import React, { Fragment } from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  argTypes: {},
  component: Modal,
  title: "UI/Modal",
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
  render: () => (
    <ModalTrigger>
      <Button>Open Modal</Button>
      <Modal>
        <ModalBody>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
            <ModalSubtitle>Modal Subtitle</ModalSubtitle>
          </ModalHeader>
          <Text paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ModalBody>
        <ModalActions>
          <Button>Okay</Button>
        </ModalActions>
      </Modal>
    </ModalTrigger>
  ),
};

export const WithCloseButton: Story = {
  args: {},
  render: () => (
    <ModalTrigger>
      <Button>Open Modal</Button>
      <Modal>
        {({ close }) => (
          <Fragment>
            <ModalBody>
              <ModalHeader>
                <ModalTitle>Modal Title</ModalTitle>
                <ModalSubtitle>Modal Subtitle</ModalSubtitle>
              </ModalHeader>
              <Text paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </ModalBody>
            <ModalActions>
              <Button
                onPress={() => {
                  close();
                }}
              >
                Close
              </Button>
            </ModalActions>
          </Fragment>
        )}
      </Modal>
    </ModalTrigger>
  ),
};

export const WithInset: Story = {
  args: {},
  render: () => (
    <ModalTrigger>
      <Button>Open Modal</Button>
      <Modal>
        <ModalBody>
          <ModalHeader>
            <ModalTitle>Modal Title</ModalTitle>
            <ModalSubtitle>Modal Subtitle</ModalSubtitle>
          </ModalHeader>
          <ModalInset>
            <Text paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </ModalInset>
          <Text paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ModalBody>
      </Modal>
    </ModalTrigger>
  ),
};
