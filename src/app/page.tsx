import Hero from '@/src/components/hero'
import homeImg from '../../public/santa.jpg'
export default function Home() {
  return (
    <>
    <div>
      <Hero imgData={homeImg} imgAlt='santa' title='Delivering Joy WorldWide' subtitle='The best global delivery service that exists' />
    </div>
    </>   
  );
}
