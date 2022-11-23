import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useRouter } from 'next/router';
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { loadImage } from '@lib/image';
import Link from 'next/link';

export default function HotelsListTile(props) {
    const router = useRouter()
    const {district} = router.query

    // const image = './Pages/api/homePageMostVisited'


    return (
      
        <div className="mostVisitedMain max-w-7xl m-auto" style={{fontFamily:'rubik',fontWeight:300}} >
        <div className="mostVisitedText">
            <b>Hotels in {district}</b>
        </div>
        <div className="  grid md:grid-cols-4 grid-cols-2 gap-6">
            {
                props.hotelList.length==0 ? <>No Hotel near destination</>  :
            props.hotelList.map((item, key)=><Item key={key} item={item}/>)
            
            }

        </div>
      </div>
    )
  }
  

  const Item = (props) => {
    const {item} = props

    const [image, setImage] = useState()
    const router = useRouter()


    useEffect(()=>{
        const fetchImage = async () => {
            const url = await loadImage(item.image[0])
            setImage(url)
        }

        fetchImage()
    },[item.image])

    const handleMostVisitedClick = (e)=>{
        e.preventDefault()
        router.push('/hotel')
    }

    return (
        <Link className="mostVisitedTiles relative" href={`/hotel/${item.id}`} passHref>
            <a>

            <div className="mostVisitedTilesImagesDiv">
                <img 
                className="mostVisitedTilesImages  w-full aspect-square overflow-hidden object-cover"
                src={image}
                width={290}
                height={200}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h4 className="font-bold">{item.name}</h4> 
                    <h6>{item.district}</h6>
                </div>
                <div className='likeButtonSection'>
                    <p>{item.rating} <AiFillStar/> </p>
                    <button className='!absolute top-5 right-5'>
                        <IconContext.Provider value={{className : "likeButtonIcon"}}>
                            <AiFillHeart/> 
                            </IconContext.Provider>
                        </button>
                </div>
            </div>
            </a>
            </Link>
    )
  }