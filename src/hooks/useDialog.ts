import { useAtom } from 'jotai'
import { dialogAtom } from '../atoms/dialog.atom'
import type { ReactNode } from "react";

export function useDialog() {
  const [dialog, setDialog] = useAtom(dialogAtom)

  const closeDialog = () => {
    setDialog({ content: null })
  }

  const setContent = (content: ReactNode) => {
    setDialog({ content })
  }

  return {
    isOpen: !!dialog.content,
    closeDialog,
    content: dialog.content,
    setContent
  }
}
