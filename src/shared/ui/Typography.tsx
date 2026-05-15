import { memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  className?: string
  html?: string
}

export const H1 = memo(({ children, className = '' }: IProps) => (
  <h1
    className={`text-slate-900 dark:text-slate-50 text-[48px] font-bold ${className}`}
  >
    {children}
  </h1>
))

export const H2 = memo(({ children, className = '' }: IProps) => (
  <h2 className={`text-slate-900 dark:text-slate-50 text-[20px] ${className}`}>
    {children}
  </h2>
))

export const H3 = memo(({ children, className = '' }: IProps) => (
  <h3 className={`text-slate-900 dark:text-slate-50 text-[16px] ${className}`}>
    {children}
  </h3>
))

export const P16 = memo(({ children, className = '' }: IProps) => (
  <p
    className={`text-slate-900 dark:text-slate-300 font-medium text-[16px] ${className}`}
  >
    {children}
  </p>
))

export const P14 = memo(({ children, className = '', html }: IProps) => (
  <p
    dangerouslySetInnerHTML={html ? { __html: html } : undefined}
    className={`text-slate-700 dark:text-slate-400 text-[14px] font-medium ${className}`}
  >
    {children}
  </p>
))
