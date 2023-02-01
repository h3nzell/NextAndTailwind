import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import Slider from 'components/Slider'
import { SliderData } from 'components/SliderData'
import Instagram from 'components/Instagram'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero heading="Captur Photography" message="I capture moments in nature and keep them alive. " />
      <Slider slides={SliderData}/>
      <Instagram />
    </>
  )
}
