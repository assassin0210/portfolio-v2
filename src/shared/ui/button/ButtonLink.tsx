import { LinkProps } from 'next/dist/client/link'
import Link from 'next/link'
import { ReactNode } from 'react'

import { Button } from './Button'

export interface IButtonLink extends LinkProps {
  children?: ReactNode
  active?: boolean
}
export const ButtonLink = ({
  children,
  href,
  active,
  ...rest
}: IButtonLink) => {
  return (
    <Link href={href} {...rest}>
      <Button
        buttonType={'LINK'}
        className={`${active ? '!text-mainGreen !font-medium' : ''}`}
      >
        {children}
      </Button>
    </Link>
  )
}
