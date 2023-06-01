import { atom, useAtom } from 'jotai'

const dialogAtom = atom(false)

export function useDialog(){
  const [isOpen, setIsOpen] = useAtom(dialogAtom)

  return { isOpen, setIsOpen }
}
