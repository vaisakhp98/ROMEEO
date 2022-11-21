import Image from 'next/image'
import heroImg from '../assets/hero.jpg'
export default function Hero() {
    return (
      <div className="heroMain relative -z-10">
       <Image 
       layout='fill'
      //  width='50'
      //  height='250'
       alt="Hero"
       src={'/heroImg.jpg'}
       className="object-cover"
       />
        {/* <h1 className='hero'>Hero Section</h1> */}
      </div>
    )
  }
  