import { StaticImageData } from 'next/image'

import {
  imgCapture1,
  imgCapture2,
  imgCapture3,
  imgMusic1,
  imgMusic2,
  imgMusic3,
  layers1,
  layers2,
  layers3,
  prosv1,
  prosv2,
  prosv3,
  sbmAdmin1,
  sbmAdmin2,
  sbmAdmin3,
  sbmMarketing1,
  tourseta1,
  tourseta2,
  tourseta3,
  tourseta4,
} from '@/shared/assets/images/images'

export type ProjectRole =
  | 'lead'
  | 'engineer'
  | 'commercial'
  | 'takeHome'
  | 'pet'

export interface IProjectItem {
  href: string
  githubLink?: string
  projectName: string
  org: string
  year?: string
  chips: readonly string[]
  i18nKey?: string
  role?: ProjectRole
  images?: readonly StaticImageData[]
}

export const projectsData: readonly IProjectItem[] = [
  {
    i18nKey: 'layers',
    href: 'https://layers.md/',
    projectName: 'Layers',
    org: 'Layers',
    year: '2024',
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
    i18nKey: 'tourseta',
    href: 'https://tourseta.com/',
    projectName: 'Tourseta',
    org: 'Tourseta',
    role: 'engineer',
    images: [tourseta1, tourseta2, tourseta3, tourseta4],
    chips: [
      'Next.js',
      'TypeScript',
      'Radix UI',
      'Tailwind',
      'TanStack Query',
      'NextAuth',
      'Stripe',
      'next-intl',
    ],
  },
  {
    i18nKey: 'schoolbusmanager',
    href: 'https://schoolbusmanager.com/',
    projectName: 'School Bus Manager',
    org: 'School Bus Manager',
    role: 'engineer',
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
  {
    i18nKey: 'prosv',
    href: 'https://prosv.ru/',
    projectName: 'Prosv',
    org: 'Aeroidea',
    year: '2023',
    role: 'engineer',
    images: [prosv1, prosv2, prosv3],
    chips: ['Next.js', 'TanStack Query', 'SCSS', 'Framer Motion'],
  },
  {
    i18nKey: 'capture',
    href: 'https://summary-proj.vercel.app',
    githubLink: 'https://github.com/assassin0210/summary',
    projectName: 'Capture',
    org: '-',
    year: '2021',
    role: 'pet',
    images: [imgCapture1, imgCapture2, imgCapture3],
    chips: ['React', 'Framer Motion', 'Styled Components'],
  },
  {
    i18nKey: 'music',
    href: 'https://music-proj.vercel.app',
    githubLink: 'https://github.com/assassin0210/music',
    projectName: 'Waves music player',
    org: '-',
    year: '2021',
    role: 'pet',
    images: [imgMusic1, imgMusic2, imgMusic3],
    chips: ['React', 'SCSS'],
  },

  {
    href: 'https://alexsokol.vercel.app',
    githubLink: 'https://github.com/assassin0210/portfolio-v2',
    projectName: 'Portfolio',
    org: '-',
    year: '2023',
    role: 'pet',
    chips: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    href: 'https://zoftify.com',
    projectName: 'Zoftify main site',
    org: 'Zoftify',
    year: '2023',
    role: 'engineer',
    chips: ['Next.js', 'Tailwind'],
  },
  {
    href: 'https://members.helium10.com',
    projectName: 'Helium 10',
    org: 'Helium 10',
    year: '2019 — 2021',
    role: 'engineer',
    chips: ['React', 'Styled Components', 'Zustand'],
  },
  {
    href: 'https://readyhubb.com',
    projectName: 'Readyhubb',
    org: 'Zoftify',
    year: '2023',
    role: 'engineer',
    chips: ['Next.js', 'Tailwind', 'Stripe', 'Redux'],
  },
]

export const projectsWithImages = projectsData.filter(
  (project): project is IProjectItem & { images: readonly StaticImageData[] } =>
    Boolean(project.images && project.images.length > 0)
)

export const projectsByYearDesc = projectsData.slice().sort((a, b) => {
  const ay = a.year ? Number(a.year.split(' ')[0]) : 0
  const by = b.year ? Number(b.year.split(' ')[0]) : 0
  return by - ay
})
