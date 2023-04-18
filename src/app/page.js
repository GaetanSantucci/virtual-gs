import Image from 'next/image';
import background from '/public/svg/background-flash.svg'

import { Inter } from 'next/font/google'
import styles from '/public/styles/page.module.scss'
import SvgBackground from '@/Components/SvgComponent';
import { Homepage } from '@/Components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Homepage />
    </main>
  )
}
