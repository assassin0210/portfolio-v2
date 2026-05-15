import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { memo } from 'react'

import {
  imgDarkTheme,
  imgLightTheme,
} from '../../../shared/assets/images/images'

interface IProps {
  isDarkMode: boolean
  handleSwitchTheme: () => void
}

const trackVariants = {
  light: { x: 0, background: 'var(--color-amber-500)' },
  dark: { x: 30, background: 'var(--color-slate-600)' },
}

const sunVariants = {
  light: { opacity: 1, scale: 1 },
  dark: { opacity: 0, scale: 0 },
}

const moonVariants = {
  light: { opacity: 0, scale: 0 },
  dark: { opacity: 1, scale: 1 },
}

export const Switch = memo(({ isDarkMode, handleSwitchTheme }: IProps) => {
  const t = useTranslations('a11y')
  return (
    <motion.button
      type={'button'}
      aria-label={isDarkMode ? t('switchToLight') : t('switchToDark')}
      aria-pressed={isDarkMode}
      className="w-[60px] h-[20px] rounded-[15px] dark:bg-slate-200 bg-slate-300 relative cursor-pointer mt-6 focus-visible:outline-2 focus-visible:outline-mainGreen focus-visible:outline-offset-2"
      onClick={handleSwitchTheme}
      initial={false}
      animate={isDarkMode ? 'dark' : 'light'}
    >
      <motion.span
        aria-hidden
        className="block w-[30px] h-[30px] rounded-full absolute top-[-6px] left-0"
        variants={trackVariants}
      />
      <motion.span
        aria-hidden
        className="block w-[30px] h-[30px] rounded-full absolute top-[-6px] left-0 flex items-center justify-center"
        variants={sunVariants}
      >
        <img src={imgLightTheme.src} alt="" aria-hidden className={'w-5 h-5'} />
      </motion.span>
      <motion.span
        aria-hidden
        variants={moonVariants}
        className={
          'block w-[30px] h-[30px] rounded-full absolute top-[-6px] right-0 flex items-center justify-center'
        }
      >
        <img src={imgDarkTheme.src} alt="" aria-hidden className={'w-5 h-5'} />
      </motion.span>
    </motion.button>
  )
})
