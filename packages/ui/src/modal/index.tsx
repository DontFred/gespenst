import { forwardRef, Fragment } from "react";
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
} from "react-aria-components";

import { cn, useWindowSize } from "../lib";
import { AriaHeading, TypographyP } from "../text";

import type { HTMLAttributes } from "react";
import type { HeadingProps as AriaHeadingProps } from "react-aria-components";

import type { ParagraphProps } from "../text/types";

import type { ModalProps } from "./types";

/**
 * ModalTrigger component
 * @description - Needed only be used if you want have a controlled Modal.
 * @param ModalTriggerProps - All react-aria-components DialogTrigger props.
 */
const ModalTrigger = AriaDialogTrigger;

/**
 * Modal component
 * @param ModalProps - All react-aria-components Modal props.
 * @param ModalProps.children - The content of the Modal.
 * @param ModalProps.role - The role of the Modal. (default: "dialog")
 * @param ModalProps.isDismissable - If the Modal is dismissable. (default: true)
 * @param ModalProps.className - To style the Modal. (additional class will get merged by cn())
 * @returns JSX.Element
 * @example
 *  <Modal>
 *    <ModalHeader>
 *      <ModalTitle>Modal Title</ModalTitle>
 *      <ModalSubtitle>Modal Subtitle</ModalSubtitle>
 *    </ModalHeader>
 *    <ModalBody>Modal Content</ModalBody>
 *    <ModalActions>
 *      <Button>Cancel</Button>
 *      <Button>Save</Button>
 *    </ModalActions>
 *  </Modal>
 */
const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, className, isDismissable = true, role, ...props }, ref) => {
    const { width } = useWindowSize();
    return (
      <AriaModalOverlay
        className={
          "data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 fixed inset-0 z-50 bg-black/40 data-[entering]:duration-500 data-[exiting]:duration-500 sm:bg-black/75 sm:data-[entering]:duration-300 sm:data-[exiting]:duration-300"
        }
        isDismissable={isDismissable}
      >
        <AriaModal
          className={cn(
            "bg-background",
            width && width < 640
              ? "data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:slide-in-from-bottom data-[exiting]:slide-out-to-bottom fixed inset-x-0 bottom-0 z-50 gap-4 rounded-t-lg border-t shadow-lg transition ease-in-out data-[entering]:duration-300 data-[exiting]:duration-500"
              : "data-[entering]:animate-in data-[entering]:slide-in-from-top-[60%] data-[entering]:slide-in-from-left-1/2 data-[exiting]:slide-out-to-left-1/2 data-[exiting]:slide-out-to-top-[60%] data-[exiting]:animate-out fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border data-[entering]:duration-200 data-[exiting]:duration-200 ",
            className
          )}
          ref={ref}
          {...props}
        >
          <AriaDialog className="outline-none" role={role}>
            {(values) => (
              <Fragment>
                {typeof children === "function" ? children(values) : children}
                {width && width < 640 && (
                  <div className="absolute left-0 top-0 -z-10 h-6 w-full overflow-hidden rounded-t-lg">
                    <div className="h-full w-full bg-[linear-gradient(180deg,_#141414_25%,_hsla(0,_0%,_100%,_0)_100%)]" />
                  </div>
                )}
              </Fragment>
            )}
          </AriaDialog>
        </AriaModal>
      </AriaModalOverlay>
    );
  }
);

/**
 * ModalBody component
 * @param ModalBodyProps - All HTMLDivElement attributes.
 * @param ModalBodyProps.className - To style the ModalBody. (additional class will get merged by cn())
 */
const ModalBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div
      className={cn("rounded-l-xl rounded-r-xl p-6 text-sm", className)}
      ref={ref}
      {...rest}
    />
  )
);

/**
 * ModalActions component
 * @param ModalActionsProps - All HTMLDivElement attributes.
 * @param ModalActionsProps.className - To style the ModalActions. (additional class will get merged by cn())
 */
const ModalActions = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div
      className={cn(
        "bg-popover sticky bottom-0 flex flex-shrink-0 justify-between border-t p-4 sm:rounded-b-xl sm:border",
        className
      )}
      ref={ref}
      {...rest}
    />
  )
);

/**
 * ModalHeader component
 * @param ModalHeaderProps - All HTMLDivElement attributes.
 * @param ModalHeaderProps.className - To style the ModalHeader. (additional class will get merged by cn())
 */
const ModalHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div className={cn("text-gray-1000 mb-6", className)} ref={ref} {...rest} />
  )
);

/**
 * ModalTitle component
 * @param ModalTitleProps - All AriaHeading props.
 * @param ModalTitleProps.className - To style the ModalTitle. (additional class will get merged by cn())
 */
const ModalTitle = forwardRef<HTMLHeadingElement, AriaHeadingProps>(
  ({ className, slot = "title", ...rest }, ref) => (
    <AriaHeading
      className={cn("text-gray-1000 mb-6 text-2xl", className)}
      slot={slot}
      {...rest}
      ref={ref}
    />
  )
);

/**
 * ModalSubtitle component
 * @param ModalSubtitleProps - All Paragraph props.
 * @param ModalSubtitleProps.className - To style the ModalSubtitle. (additional class will get merged by cn())
 */
const ModalSubtitle = forwardRef<
  HTMLParagraphElement,
  Omit<ParagraphProps, "paragraph">
>(({ className, ...rest }, ref) => (
  <TypographyP
    className={cn("text-gray-1000 m-0 text-base", className)}
    paragraph
    {...rest}
    ref={ref}
  />
));

const ModalInset = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div
      className={cn("bg-accents-1 -mx-6 border-b border-t p-6", className)}
      ref={ref}
      {...rest}
    />
  )
);

export {
  Modal,
  ModalActions,
  ModalBody,
  ModalHeader,
  ModalInset,
  ModalSubtitle,
  ModalTitle,
  ModalTrigger,
};
