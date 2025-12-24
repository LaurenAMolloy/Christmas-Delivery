import treeImg from '../../../public/tree.jpg'
import Hero from '@/src/components/hero'

export default function PerformancePage() {
  return (
    <Hero
    imgData={treeImg}
    imgAlt='mail'
    title='On time for Christmas Morning'
    subtitle='Focus on fast delivery, countdowns, sleigh-speed jokes.'></Hero>
  )
}
