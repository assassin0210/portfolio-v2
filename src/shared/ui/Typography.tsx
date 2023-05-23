import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  className?: string
}
export const H32 = ({ children, className }: IProps) => {
  return (
    <h1 className={`text-black dark:text-white ${className}`}>{children}</h1>
  )
}
export const H24 = ({ children, className }: IProps) => {
  return <h2 className={`${className}`}>{children}</h2>
}
export const H20 = ({ children, className }: IProps) => {
  return <h3 className={`${className}`}>{children}</h3>
}
export const P16 = ({ children, className }: IProps) => {
  return <p className={`${className}`}>{children}</p>
}
export const P12 = ({ children, className }: IProps) => {
  return <p className={`${className}`}>{children}</p>
}
