import Link from 'next/link'

import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'
import { H1, H2, P16 } from '@/shared/ui/Typography'
import { ThemeSwitcherButton } from '@/widgets/providers/theme/ThemeSwitcherButton'

import { Navbar } from './navbar/Navbar'

export const Header = () => {
  return (
    <AnimateFromSide type={'left'}>
      <div className={'items-center z-10'}>
        <Link href={'/'}>
          <H1>Sokolov Alexandr</H1>
        </Link>
        <H2 className={'mt-3 font-semibold'}>Frontend developer</H2>
        <P16 className={'mt-1 max-w-[300px] text-black !dark:text-gray-200'}>
          I create visually appealing and intuitive user interfaces for web
          applications.
        </P16>
        <div className={'mt-16 hidden laptop:block'}>
          <Navbar />
        </div>
        <ThemeSwitcherButton />
      </div>
    </AnimateFromSide>
  )
}
