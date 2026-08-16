import { memo } from 'react'

import {
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPhone,
  IconTelegram,
} from '@/shared/assets/icons/icons'

const socialNetworks = [
  {
    Icon: IconGithub,
    link: 'https://github.com/assassin0210',
    label: 'GitHub',
  },
  {
    Icon: IconLinkedin,
    link: 'https://www.linkedin.com/in/alexander-sokolov-0182442a1/',
    label: 'LinkedIn',
  },
  { Icon: IconTelegram, link: 'https://t.me/sokol_dev', label: 'Telegram' },
  { Icon: IconPhone, link: 'tel:+79777509711', label: 'Phone' },
  { Icon: IconMail, link: 'mailto:speedo210@gmail.com', label: 'Email' },
]

export const Socials = memo(() => (
  <div className={'flex gap-5 items-center'}>
    {socialNetworks.map(({ link, Icon, label }) => (
      <a
        key={link}
        href={link}
        target={'_blank'}
        rel="noreferrer"
        aria-label={label}
        title={label}
      >
        <Icon
          aria-hidden
          className={
            'w-6 transition fill-slate-900 dark:fill-slate-50 hover:scale-125 hover:fill-green-700 dark:hover:fill-teal-300'
          }
        />
      </a>
    ))}
  </div>
))
