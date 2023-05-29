import { ReactNode } from 'react'

import { P14 } from './Typography'

export const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={
        'bg-slate-900/10 dark:bg-green-200/10 w-fit px-3 py-1 rounded-xl'
      }
    >
      <P14 className={'dark:text-green-200  text-slate-900'}>{children}</P14>
    </div>
  )
}
