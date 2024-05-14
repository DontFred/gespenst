import type {
  DialogProps as AriaDialogProps,
  Modal as AriaModal,
} from "react-aria-components";

export interface ModalProps
  extends Omit<React.ComponentPropsWithoutRef<typeof AriaModal>, "children"> {
  children?: AriaDialogProps["children"];
  role?: AriaDialogProps["role"];
}
