import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { IconArrowUpRight } from '@/shared/assets/icons/icons'
import { P16 } from '@/shared/ui/Typography'

export const Resume = () => {
  return (
    <AnimationOneByOne>
      <a
        href={'Resume_Alexander_Sokolov.pdf'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={
            'relative py-2 px-2 group flex items-center gap-3 cursor-pointer my-10 mb-20 w-fit'
          }
        >
          <P16
            className={
              'text-white group-hover:text-green-200 transition-all duration-300'
            }
          >
            View full Resume
          </P16>
          <IconArrowUpRight
            className={`fill-white group-hover:transform group-hover:translate-x-2 rotate-45
           group-hover:scale-110 group-hover:fill-green-200 w-3 transition-all duration-300 `}
          />
          <div
            className={
              'h-[2px] absolute left-0 bottom-0 w-0 group-hover:w-full bg-green-200 transition-all duration-300'
            }
          />
        </div>
      </a>
    </AnimationOneByOne>
  )
}