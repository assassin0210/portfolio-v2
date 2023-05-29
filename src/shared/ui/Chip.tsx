import { ReactNode } from 'react'

import { P14 } from './Typography'

export const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={
        'bg-green-600/10 dark:bg-green-200/10 w-fit px-3 py-1 rounded-xl'
      }
    >
      <P14 className={'dark:text-green-200  text-green-600'}>{children}</P14>
    </div>
  )
}
