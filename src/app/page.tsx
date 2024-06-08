import { Header } from '@/features/header/Header'
import { HomePage } from '@/features/homePage/HomePage'

export default async function Home() {
  return (
    <div className={'grid container laptop:grid-cols-[auto_1fr] gap-16'}>
      <Header />
      <HomePage />
    </div>
  )
}
