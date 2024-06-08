import { ReactNode } from 'react'

import { TColorsType } from '../lib/types/common'

interface IProps {
  children?: ReactNode
  className?: string
  color?: TColorsType
  html?: string
}
export const H1 = ({ children, className = '' }: IProps) => {
  return (
    <h1
      className={`dark:text-white text-black text-[48px] font-bold  ${className}`}
    >
      {children}
    </h1>
  )
}
export const H2 = ({ children, className = '' }: IProps) => {
  return (
    <h2 className={`dark:text-white text-[20px] text-black ${className}`}>
      {children}
    </h2>
  )
}
export const H3 = ({ children, className = '' }: IProps) => {
  return (
    <h3 className={`dark:text-white text-black text-[16px] ${className}`}>
      {children}
    </h3>
  )
}
export const P16 = ({ children, className = '' }: IProps) => {
  return (
    <p
      className={`text-black dark:text-gray-200 font-medium text-[16px] ${className}`}
    >
      {children}
    </p>
  )
}
export const P14 = ({ children, className = '', html }: IProps) => {
  return (
    <p
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      className={`text-black dark:text-gray-100 text-[14px] font-medium ${className}`}
    >
      {children}
    </p>
  )
}
