import { Button } from "@gespenst/ui/button";
import {
  Modal,
  ModalActions,
  ModalBody,
  ModalHeader,
  ModalSubtitle,
  ModalTitle,
  ModalTrigger,
} from "@gespenst/ui/modal";
import { Text } from "@gespenst/ui/text";
import { Fragment } from "react";

/**
 * Example component that uses the `Modal` with a Close Button.
 * @returns JSX.Element
 */
export function CloseExample() {
  return (
    <ModalTrigger>
      <Button className="place-self-center">Open Modal</Button>
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
                variant={"secondary"}
              >
                Close
              </Button>
            </ModalActions>
          </Fragment>
        )}
      </Modal>
    </ModalTrigger>
  );
}
