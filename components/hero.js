import Image from 'next/image'
import heroImg from '../assets/hero.jpg'
export default function Hero() {
    return (
      <div className="heroMain">
       {/* <Image 
       layout='fixed'
       width='50'
       height='250'
       src={heroImg}
       /> */}
        <h1 className='hero'>Hero Section</h1>
      </div>
    )
  }
  