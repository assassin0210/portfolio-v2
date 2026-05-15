import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react'

import { TComponentSize, TComponentType } from '../../lib/types/common'

export interface IButton extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  buttonSize?: TComponentSize
  buttonType?: TComponentType
}

export const Button = memo(
  ({
    children,
    className = '',
    buttonSize = 'MEDIUM',
    buttonType = 'DEFAULT',
    type = 'button',
    ...rest
  }: IButton) => (
    <button
      type={type}
      className={`${sizeSchema[buttonSize][buttonType]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
)

const defaultColorTheme = 'bg-mainGreen text-slate-900 font-semibold'
const defaultEffects =
  'shadow-inner transition-shadow active:shadow-green-700 active:drop-shadow-md hover:shadow-green-400'

const linkColorTheme =
  'text-green-700 dark:text-teal-300 hover:text-green-800 dark:hover:text-teal-200 transition font-semibold'

const sizeSchema: Record<TComponentSize, Record<TComponentType, string>> = {
  SMALL: {
    DEFAULT: `${defaultColorTheme} ${defaultEffects} px-2 rounded-[6px] h-[32px] text-[14px] font-medium`,
    LINK: `${linkColorTheme}`,
  },
  MEDIUM: {
    DEFAULT: `${defaultColorTheme} ${defaultEffects} px-3.5 h-[40px] rounded-[8px] text-[16px] hr:text-[18px] font-normal`,
    LINK: `${linkColorTheme}`,
  },
  LARGE: {
    DEFAULT: `${defaultColorTheme} ${defaultEffects} px-5 rounded-[10px] h-[46px] text-[18px] hr:text-[20px] font-normal`,
    LINK: `${linkColorTheme}`,
  },
}
