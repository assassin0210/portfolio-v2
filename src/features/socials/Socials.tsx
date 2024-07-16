import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconTelegram,
} from '@/shared/assets/icons/icons'
import { P14 } from '@/shared/ui/Typography'

export const Socials = () => {
  return (
    <div className={'flex gap-5 items-center'}>
      {socialNetworks.map(({ link, Icon }) => (
        <a key={link} href={link} target={'_blank'} rel="noreferrer">
          <Icon
            className={
              'w-7 transition  fill:text-black dark:fill-white hover:scale-125'
            }
          />
        </a>
      ))}
      <a href={'Alex_Sokolov.pdf'} target="_blank" rel="noopener noreferrer">
        <P14 className={'!text-white'}> Download Resume</P14>
      </a>
    </div>
  )
}

const socialNetworks = [
  { Icon: IconGithub, link: 'https://github.com/assassin0210' },
  {
    Icon: IconLinkedin,
    link: 'https://www.linkedin.com/in/alexander-socolov-528426213/',
  },
  {
    Icon: IconTelegram,
    link: 'https://t.me/sokol_dev',
  },
  {
    Icon: IconPhone,
    link: 'tel:+79777509711',
  },
  {
    Icon: IconMail,
    link: 'mailto:speedo210@gmail.com',
  },
]
