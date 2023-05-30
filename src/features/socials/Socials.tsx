import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconTelegram,
} from '@/shared/assets/icons/icons'

export const Socials = () => {
  return (
    <div className={'flex gap-5'}>
      {socialNetworks.map(({ link, Icon }) => (
        <a key={link} href={link} target={'_blank'} rel="noreferrer">
          <Icon
            className={
              'w-7 transition  fill:text-black dark:fill-white hover:scale-125'
            }
          />
        </a>
      ))}
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
