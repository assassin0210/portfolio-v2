import { Header } from '@/features/header/Header'
import { HomePage } from '@/features/homePage/HomePage'

export default async function Home() {
  return (
    <div className={'grid container laptop:grid-cols-2 gap-10'}>
      <Header />
      <HomePage />
    </div>
  )
}
