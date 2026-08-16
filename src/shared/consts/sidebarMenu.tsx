import { About } from '@/features/about/About'
import { Experience } from '@/features/experience/Experience'
import { Projects } from '@/features/projects/Projects'

export const blocks = [
  { id: 'about', i18nKey: 'about', Component: About },
  { id: 'experience', i18nKey: 'experience', Component: Experience },
  { id: 'projects', i18nKey: 'projects', Component: Projects },
] as const

export const navBarBlocks = blocks.map(({ id, i18nKey }) => ({ id, i18nKey }))
