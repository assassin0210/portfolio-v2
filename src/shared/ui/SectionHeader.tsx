import { ReactNode } from 'react'

import { H2 } from '@/shared/ui/Typography'

export const SectionHeader = ({ children }: { children: ReactNode }) => {
  return (
    <H2
      className={
        'sticky transition duration-500 top-0 z-10 -mx-6 mb-4 w-screen bg-stone-50/75 dark:bg-slate-900/75 px-6 py-6 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'
      }
    >
      {children}
    </H2>
  )
}
