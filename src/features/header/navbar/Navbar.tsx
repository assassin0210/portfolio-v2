'use client'
import { Link } from 'react-scroll'

import { navBarBlocks } from '@/shared/consts/sidebarMenu'
import { P14 } from '@/shared/ui/Typography'

import { useNavScroll } from './useNavScroll'

export const Navbar = () => {
  const activeId = useNavScroll('content-block', navBarBlocks[0].id)
  return (
    <nav>
      <ul className={'space-y-3'}>
        {navBarBlocks.map(({ id, label }) => (
          <MenuItem key={id} active={activeId === id} id={id}>
            {label}
          </MenuItem>
        ))}
      </ul>
    </nav>
  )
}

const MenuItem = ({ id, active }: any) => {
  return (
    <li
      className={`flex items-center transition gap-2 ${
        active ? '' : 'group opacity-50 scale-y-90'
      }`}
    >
      <div
        className={`animated-bar dark:bg-white bg-gray-200  ${
          active ? 'active' : 'group-hover:w-[60px]'
        }`}
      />
      <Link
        to={id}
        className={`cursor-pointer  ${active ? '!text-mainGreen ' : ''}`}
        ignoreCancelEvents={false}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <P14
          className={'text-gray-200 dark:text-white font-semibold uppercase'}
        >
          {' '}
          {id}
        </P14>
      </Link>
    </li>
  )
}
