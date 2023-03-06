import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //do we want this to be our about page 
  return (
    <main className={styles.main}>
     <h1>Rock Doc to the Rescue!</h1>
    </main>
  )
}
