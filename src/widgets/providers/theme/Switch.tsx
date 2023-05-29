import { motion } from 'framer-motion'
import React from 'react'

import {
  imgDarkTheme,
  imgLightTheme,
} from '../../../shared/assets/images/images'

export const Switch = ({
  isDarkMode,
  handleSwitchTheme,
}: {
  isDarkMode: boolean
  handleSwitchTheme: () => void
}) => {
  return (
    <motion.div
      className="w-[60px] h-[20px] rounded-[15px] dark:bg-white bg-gray-50 relative cursor-pointer mt-6"
      onClick={handleSwitchTheme}
      initial={false}
      animate={isDarkMode ? 'dark' : 'light'}
    >
      <motion.div
        className="w-[30px] h-[30px] rounded-full absolute top-[-6px] left-0"
        variants={{
          light: {
            x: 0,
            background: '#7a641d',
          },
          dark: {
            x: 30,
            background: '#716c75',
          },
        }}
      />
      <motion.div
        className="w-[30px] h-[30px] rounded-full bg-[#7a641d] absolute top-[-6px] left-0 flex items-center justify-center"
        variants={{
          light: {
            opacity: 1,
            scale: 1,
          },
          dark: {
            opacity: 0,
            scale: 0,
          },
        }}
      >
        <img src={imgLightTheme.src} alt="Sun" className={'w-5 h-5'} />
      </motion.div>
      <motion.div
        variants={{
          light: {
            opacity: 0,
            scale: 0,
          },
          dark: {
            opacity: 1,
            scale: 1,
          },
        }}
        className={
          'w-[30px] h-[30px] rounded-full bg-[#716c75] absolute top-[-6px] right-0 flex items-center justify-center'
        }
      >
        <img src={imgDarkTheme.src} alt="moon" className={'w-5 h-5'} />
      </motion.div>
    </motion.div>
  )
}
