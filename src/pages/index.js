import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Main from '@/Components/Main'
import Signup from './Signup'
import SigninForm from '@/Components/SigninForm'
import ProfileInfo from './ProfileInfo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      // <Main />
      // <Signup/>
      // <Login/>
    // <ProfileInfo/>


      <SigninForm/>

  )
} 
