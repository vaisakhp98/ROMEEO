import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useRouter } from 'next/router';
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { loadImage } from '@lib/image';

export default function HotelsListTile(props) {

    // const image = './Pages/api/homePageMostVisited'


    return (
      
        <div className="mostVisitedMain" style={{fontFamily:'rubik',fontWeight:300}} >
        <div className="mostVisitedText">
            <b>Hotels in Munnar</b>
        </div>
        <div className="mostVisitedSection">
            {
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
        <div className="mostVisitedTiles" onClick={handleMostVisitedClick}>
            <div className="mostVisitedTilesImagesDiv">
                <img 
                className="mostVisitedTilesImages"
                src={image}
                width={290}
                height={200}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h4>{item.name}</h4> 
                    <h6>{item.district}</h6>
                </div>
                <div className='likeButtonSection'>
                    <p>{item.rating} <AiFillStar/> </p>
                    <button className='likeButton'>
                        <IconContext.Provider value={{className : "likeButtonIcon"}}>
                            <AiFillHeart/> 
                            </IconContext.Provider>
                        </button>
                </div>
            </div>
        </div>
    )
  }