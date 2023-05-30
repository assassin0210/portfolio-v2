import { Header } from '@/features/header/Header'
import { HomePage } from '@/features/homePage/HomePage'
import { MouseEffect } from '@/features/mouseEffect/MouseEffect'

export default function Home() {
  return (
    <>
      <MouseEffect>
        <div className={'grid container laptop:grid-cols-2 gap-10'}>
          <Header />
          <HomePage />
        </div>
      </MouseEffect>
    </>
  )
}
