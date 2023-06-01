import { atom, useAtom } from 'jotai'

const dialogAtom = atom(false)

export function useDialog(){
  const [isOpen, setIsOpen] = useAtom(dialogAtom)

  const openDialog = () => setIsOpen(true)
  
  const closeDialog = () => setIsOpen(false)

  const toggleDialog = () => setIsOpen((prev) => !prev)

  return {
    isOpen,
    openDialog,
    closeDialog,
    toggleDialog
  }
}
