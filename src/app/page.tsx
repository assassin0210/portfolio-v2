import { Header } from '@/features/header/Header'
import { HomePage } from '@/features/homePage/HomePage'
import { MouseEffect } from '@/features/mouseEffect/MouseEffect'

export default function Home() {
  return (
    <div className={'w-screen overflow-hidden'}>
      <MouseEffect>
        <div className={'container grid laptop:grid-cols-2 gap-10  '}>
          <header className={'laptop:sticky top-0 h-fit pt-20 z-10'}>
            <Header />
          </header>
          <HomePage />
        </div>
      </MouseEffect>
    </div>
  )
}
