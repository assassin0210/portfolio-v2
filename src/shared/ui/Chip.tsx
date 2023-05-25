import { ReactNode } from 'react'

import { P14 } from './Typography'

export const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'bg-green-200 bg-opacity-10 w-fit px-3 py-1 rounded-xl'}>
      <P14 className={'!text-green-200'}>{children}</P14>
    </div>
  )
}
