import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Navbar from './common/navbar'
import MyProfile from './common/myprofile'
import DownloadResume from './common/downloadResume'
import RecentPostSlider from './common/homepage/recentPostSlider'
import FeaturedWork from './common/homepage/featuredWork'
import Footer from './common/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhinav Kaphle</title>
        <meta name="description" content="Abhinav Kaphle Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar active=""/>
        <section className={styles.section}>
          <MyProfile />
          <DownloadResume />
          <RecentPostSlider />
          <FeaturedWork />
          <Footer />
        </section>
      </main>
    </>
  )
}
