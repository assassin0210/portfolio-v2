import {
  imgCapture1,
  imgCapture2,
  imgCapture3,
  imgGame1,
  imgGame2,
  imgGame3,
  imgMusic1,
  imgMusic2,
  imgMusic3,
  imgOldPortfolio1,
  imgOldPortfolio2,
  imgPizza,
  imgPizzaC,
  imgRelines1,
  imgRelines2,
  imgTesla1,
  imgTesla2,
  imgTesla3,
  imgWaxom1,
  imgWaxom2,
  imgWaxom3,
} from '@/shared/assets/images/images'

export const projectsData = [
  {
    href: 'https://summary-proj.vercel.app',
    githubLink: 'https://github.com/assassin0210/summary',
    projectName: 'Capture',
    org: '',
    year: '2021',
    images: [imgCapture1, imgCapture2, imgCapture3],
    description:
      'Imagine a magical journey into the world of photography, where every camera click transforms into living images. This stunning and animated portfolio website for a photographer takes you to a mesmerizing space where graceful transitions between sections and animated effects create an impressive and unforgettable experience. The stylish design, combined with breathtaking photographs, allows visitors to immerse themselves in your art and feel its magic.',
    chips: ['React.js', 'Framer-motion', 'Styled-component'],
  },
  {
    href: 'https://music-proj.vercel.app',
    year: '2021',
    org: '',
    githubLink: 'https://github.com/assassin0210/music',
    projectName: 'Waves music player',
    images: [imgMusic1, imgMusic2, imgMusic3],
    description:
      'This beautiful and minimalist music application features 10 unique tracks. Its stylish design and simple interface ensure ease of use. It will allow you to enjoy a variety of music and create an atmosphere that reflects your mood and preferences.',
    chips: ['React.js', 'SCSS'],
  },
  {
    href: 'https://alexsokol.vercel.app',
    githubLink: 'https://github.com/assassin0210/portfolio-v2',
    projectName: 'Portfolio v2',
    org: '',
    year: '2023',
    description: '',
    chips: ['Next.js', 'Tailwind', 'Framer motion'],
  },
  {
    href: 'https://pizza-proj.vercel.app',
    githubLink: 'https://github.com/assassin0210/pizzza',
    projectName: 'Pizza',
    year: '2021',
    org: '',
    images: [imgPizza, imgPizzaC],
    description:
      'An online pizza shop is implemented with sorting, size and flavor selection options. Users can add different pizza variations to the cart for further payment.',
    chips: ['React.js', 'SCSS', 'Redux'],
  },
  {
    href: 'https://portfolio-alex-v1.vercel.app',
    githubLink: 'https://github.com/assassin0210/my-portfolio',
    projectName: 'My portfolio v1',
    year: '2022',
    org: '',
    images: [imgOldPortfolio1, imgOldPortfolio2],
    description:
      'In my first portfolio, I implemented a version that stored basic information using an API. I also integrated Google Maps and put effort into creating an appealing design.',
    chips: [
      'React.js',
      'Axios',
      'TypeScript',
      'Styled-components',
      'Font Awesome',
    ],
  },
  {
    href: 'https://tesla-alex.vercel.app',
    githubLink: 'https://github.com/assassin0210/tesla',
    projectName: 'Tesla',
    images: [imgTesla1, imgTesla2, imgTesla3],
    year: '2020',
    org: '',
    description:
      'Landing page. Presentation of a new roadster from Tesla and Elon Musk',
    chips: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    href: 'https://relines.vercel.app',
    githubLink: 'https://github.com/assassin0210/relines',
    projectName: 'Test task for the company Relines',
    images: [imgRelines1, imgRelines2],
    year: '2023',
    org: '',
    description:
      "Test task for the company Relines. I get data from open api . the table contains users. We can add a rating to a user or lower a user's rating. Also encourage or vice versa ban",
    chips: ['React.js', 'Tailwind', 'Framer-motion', 'Open API'],
  },
  {
    href: 'https://table-info.vercel.app',
    githubLink: 'https://github.com/assassin0210/table-info',
    projectName: 'Game table info',
    images: [imgGame1, imgGame2, imgGame3],
    year: '2021',
    org: '',
    description:
      'Welcome to our small and exciting project about games! Here you will find the best games, highly anticipated releases, and detailed information about each of them. Our data is sourced from an open API and is regularly updated to keep you informed about the latest gaming trends. Join us to explore amazing game worlds, unique storylines, and captivating gameplay mechanics.',
    chips: ['React.js', 'Styled-component', 'Framer-motion', 'Open API'],
  },
  {
    href: 'https://woxan.vercel.app',
    githubLink: 'https://github.com/assassin0210/woxan',
    projectName: 'Waxom',
    year: '2020',
    org: '',
    images: [imgWaxom1, imgWaxom2, imgWaxom3],
    description: 'Landing page. Womax company presentation',
    chips: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    href: 'https://zoftify.com',
    githubLink: '',
    projectName: 'Zoftify main site',
    org: 'Zoftify',
    year: '2023',
    chips: ['Next.js', 'Tailwind'],
  },
  {
    href: 'https://members.helium10.com',
    githubLink: '',
    projectName: 'Helium10 Adtomic tool',
    org: 'Helium10',
    year: '2022',
    chips: ['React', 'Styled components', 'zustand'],
  },
  // {
  //   href: 'https://admin.readyhubb.com',
  //   githubLink: '',
  //   org: 'Zoftify',
  //   projectName: 'Readyhubb admin panel',
  //   year: '2023',
  //   chips: ['Next.js', 'Tailwind', 'Tippyjs'],
  // },
  {
    href: 'https://readyhubb.com',
    githubLink: '',
    projectName: 'Readyhubb',
    org: 'Zoftify',
    year: '2023',
    chips: ['Next.js', 'Tailwind', 'Stripe', 'Redux'],
  },
  {
    href: 'https://krumod.lv',
    githubLink: '',
    projectName: 'Krumod',
    org: 'Zoftify',
    year: '2022',
    chips: ['Next.js', 'Tailwind'],
  },
  // {
  //   href: '',
  //   githubLink: '',
  //   projectName: 'Krumod admin panel',
  //   org: 'Zoftify',
  //   year: '2022',
  //   chips: ['Next.js', 'Tailwind'],
  // },
  // {
  //   href: 'https://monitor.zoftify.com',
  //   githubLink: '',
  //   projectName: 'Monitoring company',
  //   org: 'Zoftify',
  //   year: '2022',
  //   chips: ['Next.js', 'Tailwind'],
  // },
]
