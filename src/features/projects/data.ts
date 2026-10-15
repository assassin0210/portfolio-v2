import { StaticImageData } from 'next/image'

import {
  layers1,
  layers2,
  layers3,
  sbmAdmin1,
  sbmAdmin2,
  sbmAdmin3,
  sbmMarketing1,
} from '@/shared/assets/images/images'

export type ProjectRole = 'lead' | 'engineer'

export interface IProjectItem {
  href: string
  projectName: string
  chips: readonly string[]
  i18nKey: string
  role: ProjectRole
  images: readonly StaticImageData[]
}

export const projectsData: readonly IProjectItem[] = [
  {
    i18nKey: 'layers',
    href: 'https://layers.md/',
    projectName: 'DocSpace',
    role: 'engineer',
    images: [layers1, layers2, layers3],
    chips: [
      'React',
      'TypeScript',
      'Vite',
      'Mantine',
      'Zustand',
      'TanStack Query',
      'Lexical',
      'Playwright',
    ],
  },
  {
    i18nKey: 'schoolbusmanager',
    href: 'https://schoolbusmanager.com/',
    projectName: 'School Bus Manager',
    role: 'lead',
    images: [sbmAdmin1, sbmAdmin2, sbmAdmin3, sbmMarketing1],
    chips: [
      'React',
      'TypeScript',
      'Vite',
      'Mantine',
      'TanStack Query',
      'TanStack Router',
      'Zustand',
      'Socket.IO',
    ],
  },
]
