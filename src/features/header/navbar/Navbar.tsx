'use client'
import { useTranslations } from 'next-intl'
import { memo, ReactNode } from 'react'
import { Link } from 'react-scroll'

import { navBarBlocks } from '@/shared/consts/sidebarMenu'
import { P14 } from '@/shared/ui/Typography'

import { useNavScroll } from './useNavScroll'

export const Navbar = memo(() => {
  const t = useTranslations('nav')
  const activeId = useNavScroll(navBarBlocks[0].id)

  return (
    <nav>
      <ul className={'space-y-3'}>
        {navBarBlocks.map(({ id, i18nKey }) => (
          <MenuItem key={id} active={activeId === id} id={id}>
            {t(i18nKey)}
          </MenuItem>
        ))}
      </ul>
    </nav>
  )
})

interface IMenuItemProps {
  id: string
  active: boolean
  children: ReactNode
}

const MenuItem = memo(({ id, active, children }: IMenuItemProps) => (
  <li
    className={`flex items-center transition gap-2 ${
      active ? '' : 'group opacity-50 scale-y-90'
    }`}
  >
    <div
      className={`animated-bar ${
        active
          ? 'bg-green-800 dark:bg-mainGreen active'
          : 'bg-green-700 dark:bg-teal-300 group-hover:w-[60px]'
      }`}
    />
    <Link
      to={id}
      href={`#${id}`}
      className={
        'cursor-pointer focus-visible:outline-2 focus-visible:outline-mainGreen focus-visible:outline-offset-2 rounded'
      }
      ignoreCancelEvents={false}
      smooth={true}
      offset={-80}
      duration={500}
      aria-current={active ? 'true' : undefined}
    >
      <P14
        className={`font-semibold uppercase ${
          active
            ? '!text-green-800 dark:!text-mainGreen'
            : '!text-green-700 dark:!text-slate-50'
        }`}
      >
        {children}
      </P14>
    </Link>
  </li>
))
