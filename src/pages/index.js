import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Main from '@/Components/Main'
import Signup from '@/Components/Signup'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Main />
      // <Signup/>
  )
}
