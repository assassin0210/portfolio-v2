'use client'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { Link } from 'react-scroll'

import { navBarBlocks } from '@/shared/consts/sidebarMenu'

import { useNavScroll } from './useNavScroll'

export const MobileNav = memo(() => {
  const t = useTranslations('nav')
  const activeId = useNavScroll(navBarBlocks[0].id)

  return (
    <nav
      className={
        'laptop:hidden sticky top-0 z-20 -mx-4 px-4 py-3 bg-stone-50/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-300/50 dark:border-slate-700/50'
      }
    >
      <ul
        className={
          'flex gap-2 overflow-x-auto no-scrollbar items-center whitespace-nowrap'
        }
      >
        {navBarBlocks.map(({ id, i18nKey }) => {
          const active = activeId === id
          return (
            <li key={id}>
              <Link
                to={id}
                href={`#${id}`}
                smooth={true}
                offset={-80}
                duration={500}
                aria-current={active ? 'true' : undefined}
                className={`cursor-pointer text-[12px] font-semibold uppercase tracking-wide rounded-full px-3 py-1.5 transition focus-visible:outline-2 focus-visible:outline-mainGreen focus-visible:outline-offset-2 ${
                  active
                    ? 'bg-mainGreen text-slate-900'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-stone-200 dark:hover:bg-slate-800'
                }`}
              >
                {t(i18nKey)}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
})
