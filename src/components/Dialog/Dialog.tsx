import { StyledDialog } from "./styles";
import { useDialog } from "../../hooks/useDialog";
import type { DialogProps as MuiDialogProps } from "@mui/material";
import type { ReactNode } from "react";

export interface DialogProps extends Omit<MuiDialogProps, 'open' | 'onClose'> {
  children: ReactNode;
};

export function Dialog({ children, ...rest }: DialogProps) {
  const { isOpen, setIsOpen } = useDialog();

  return <StyledDialog open={isOpen} onClose={() => setIsOpen(false)} {...rest}>{children}</StyledDialog>;
}
