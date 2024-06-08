import { About } from '@/features/about/About'
import { Experience } from '@/features/experience/Experience'
import { InterestingExperience } from '@/features/interestingExperience/InterestingExperience'
import { Projects } from '@/features/projects/Projects'

export const blocks = [
  {
    id: 'about',
    label: 'About',
    Component: About,
  },
  {
    id: 'experience',
    label: 'Experience',
    Component: Experience,
  },
  {
    id: 'interesting_experience',
    label: 'Interesting Experience',
    Component: InterestingExperience,
  },
  {
    id: 'projects',
    label: 'Projects',
    Component: Projects,
  },
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navBarBlocks = blocks.map(({ component, ...rest }) => ({
  ...rest,
}))
