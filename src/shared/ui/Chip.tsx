import { memo, ReactNode } from 'react'

import { P14 } from './Typography'

export const Chip = memo(({ children }: { children: ReactNode }) => (
  <div
    className={
      'bg-slate-900/10 dark:bg-teal-300/10 ring-1 ring-slate-900/10 dark:ring-teal-300/20 w-fit px-3 py-1 rounded-xl'
    }
  >
    <P14 className={'!text-slate-900 dark:!text-teal-300'}>{children}</P14>
  </div>
))
