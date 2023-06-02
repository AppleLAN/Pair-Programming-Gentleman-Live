import { useDialog } from "../../hooks/useDialog";
import { Dialog as MuiDialog} from "@mui/material";

export function Dialog() {
  const { isOpen, content, closeDialog } = useDialog();

  return <MuiDialog open={isOpen} onClose={closeDialog}>{content}</MuiDialog>;
}
