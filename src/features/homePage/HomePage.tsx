'use client'
import { Element } from 'react-scroll'

import { blocks } from '@/shared/consts/sidebarMenu'

export const HomePage = () => {
  return (
    <main className=" w-full hr:gap-10 pt-20">
      {blocks.map(({ id, Component }) => (
        <Element key={id} name={id} id={id}>
          <Component />
        </Element>
      ))}
    </main>
  )
}
