'use client'
import { memo } from 'react'

interface IProps {
  label: string
}

export const PrintButton = memo(({ label }: IProps) => (
  <button
    type={'button'}
    onClick={() => window.print()}
    className={
      'px-4 py-2 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:opacity-80 transition'
    }
  >
    {label}
  </button>
))
