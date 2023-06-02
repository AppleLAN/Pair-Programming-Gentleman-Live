import { atom } from 'jotai'
import type { ReactNode } from 'react'

export type DialogAtom = {
  content: ReactNode | null;
}

export const dialogAtom = atom<DialogAtom>({
  content: null,
})
