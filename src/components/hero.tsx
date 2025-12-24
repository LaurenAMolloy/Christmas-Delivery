import type {StaticImageData} from 'next/image'
import Image from 'next/image'

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
    subtitle: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className='relative h-screen'>
        <div className='absolute -z-10 inset-0 bg-slate-900'>
            <Image
            src={props.imgData}
            alt={props.imgAlt}
            priority
            placeholder="blur"
            fill
            sizes='100vw' 
            style={{ objectFit: 'cover'}} ></Image>
        <div className="absolute inset-0 bg-linear-to-r
         from-slate-900/90
         via-slate-800/70
         to-slate-900/90">
        </div>
        </div>
        <div className='pt-48 flex flex-col justify-center items-center'>
            <h1 className='text-white text-6xl'>{props.title}</h1>
            <h2 className='text-white text-3xl pt-3'>{props.subtitle}</h2>
        </div>
    </div>
   
  )
}
