import type { ReactNode } from "react";
import { useDialog } from "../../hooks/useDialog";
import { StyledDialog } from "./styles";

export type DialogProps = {
  children: ReactNode;
};

export function Dialog({ children }: DialogProps) {
  const { isOpen } = useDialog();

  return <StyledDialog open={isOpen}>{children}</StyledDialog>;
}
