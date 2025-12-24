import mailImg from '../../../public/mail.jpg'
import Hero from '@/src/components/hero'

export default function ReliabilityPage() {
  return (
    <Hero
    imgData={mailImg}
    imgAlt='mail'
    title='Naughty or Nice Guaranteed'
    subtitle='Accuracy, gift tracking, no lost presents.'></Hero>
  )
}

