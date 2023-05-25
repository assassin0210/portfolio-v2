import { Header } from '@/features/header/Header'
import { HomePage } from '@/features/homePage/HomePage'
import { MouseEffect } from '@/features/mouseEffect/MouseEffect'

export default function Home() {
  return (
    <MouseEffect>
      <div className={'container grid grid-cols-2 gap-10   '}>
        <header className={'sticky top-0 h-fit pt-20'}>
          <Header />
        </header>
        <HomePage />
      </div>
    </MouseEffect>
  )
}
