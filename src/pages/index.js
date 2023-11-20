import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Main from '@/Components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Main />
    </>
  )
}
