import { useDialog } from "../../hooks/useDialog";
import { Dialog as MuiDialog} from "@mui/material";
import type { DialogProps as MuiDialogProps } from "@mui/material";
import type { ReactNode } from "react";

export interface DialogProps extends Omit<MuiDialogProps, 'open' | 'onClose'> {
  children: ReactNode;
};

export function Dialog({ children, ...rest }: DialogProps) {
  const { isOpen, setIsOpen } = useDialog();
  const handleClose = () => setIsOpen(false);

  return <MuiDialog open={isOpen} onClose={handleClose} {...rest}>{children}</MuiDialog>;
}
