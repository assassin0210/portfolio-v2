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
  imgTesla1,
  imgTesla2,
  imgTesla3,
  imgWaxom1,
  imgWaxom2,
  imgWaxom3,
} from '@/shared/assets/images/images'

export const projectsData = [
  {
    href: 'https://pizza-eight-pi.vercel.app/',
    githubLink: 'https://github.com/assassin0210/pizzza',
    projectName: 'Pizza',
    images: [imgPizza, imgPizzaC],
    description:
      'An online pizza shop is implemented with sorting, size and flavor selection options. Users can add different pizza variations to the cart for further payment.',
    chips: ['React.js', 'SCSS', 'Redux'],
  },
  {
    href: 'https://my-portfolio-six-umber-81.vercel.app/',
    githubLink: 'https://github.com/assassin0210/my-portfolio',
    projectName: 'My portfolio v1',
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
    href: 'https://tesla-n2y3yproc-assassin0210.vercel.app/',
    githubLink: 'https://github.com/assassin0210/tesla',
    projectName: 'Tesla',
    images: [imgTesla1, imgTesla2, imgTesla3],
    description:
      'Landing page. Presentation of a new roadster from Tesla and Elon Musk',
    chips: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    href: 'https://woxan-ibhbbajfc-assassin0210.vercel.app/',
    githubLink: 'https://github.com/assassin0210/woxan',
    projectName: 'Waxom',
    images: [imgWaxom1, imgWaxom2, imgWaxom3],
    description: 'Landing page. Womax company presentation',
    chips: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    href: 'https://music-rho-liard.vercel.app/',
    githubLink: 'https://github.com/assassin0210/music',
    projectName: 'Waves music player',
    images: [imgMusic1, imgMusic2, imgMusic3],
    description:
      'This beautiful and minimalist music application features 10 unique tracks. Its stylish design and simple interface ensure ease of use. It will allow you to enjoy a variety of music and create an atmosphere that reflects your mood and preferences.',
    chips: ['React.js', 'SCSS'],
  },
  {
    href: 'https://summary-inky.vercel.app/',
    githubLink: 'https://github.com/assassin0210/summary',
    projectName: 'Capture',
    images: [imgCapture1, imgCapture2, imgCapture3],
    description:
      'Imagine a magical journey into the world of photography, where every camera click transforms into living images. This stunning and animated portfolio website for a photographer takes you to a mesmerizing space where graceful transitions between sections and animated effects create an impressive and unforgettable experience. The stylish design, combined with breathtaking photographs, allows visitors to immerse themselves in your art and feel its magic.',
    chips: ['React.js', 'Framer-motion', 'Styled-component'],
  },
  {
    href: 'https://table-info.vercel.app/',
    githubLink: 'https://github.com/assassin0210/table-info',
    projectName: 'Game table info',
    images: [imgGame1, imgGame2, imgGame3],
    description:
      'Welcome to our small and exciting project about games! Here you will find the best games, highly anticipated releases, and detailed information about each of them. Our data is sourced from an open API and is regularly updated to keep you informed about the latest gaming trends. Join us to explore amazing game worlds, unique storylines, and captivating gameplay mechanics.',
    chips: ['React.js', 'Styled-component', 'Framer-motion', 'Open API'],
  },
]
