import { atom } from 'jotai'
import type { ReactNode } from 'react'

export const dialogAtom = atom<ReactNode | null>(null)
