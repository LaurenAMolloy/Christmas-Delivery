import stockingImg from '../../../public/stocking.jpg'
import Hero from '@/src/components/hero'

export default function ScalePage() {
  return (
    <>
    <Hero
    imgData={stockingImg}
    imgAlt='mail'
    title='From One Stocking to Millions'
    subtitle="How Santa handles global scale in one night."></Hero>
    </>
  )
}

