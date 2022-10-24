import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useRouter } from 'next/router';
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import axios from 'axios';
import { useEffect } from 'react';

export default function HotelsListTile(props) {

    const image = './Pages/api/homePageMostVisited'

    const router = useRouter()

    const handleMostVisitedClick = (e)=>{
        e.preventDefault()
        router.push('/hotel')
    }
    return (
      
        <div className="mostVisitedMain" style={{fontFamily:'rubik',fontWeight:300}} >
        <div className="mostVisitedText">
            <b>Hotels in Munnar</b>
        </div>
        <div className="mostVisitedSection">
            {
            props.hotelList.map((item, key)=>{ 
                console.log(item.image)
            return(<div key={key} className="mostVisitedTiles" onClick={handleMostVisitedClick}>
            <div className="mostVisitedTilesImagesDiv">
                <img 
                className="mostVisitedTilesImages"
                src={item.image}
                width={290}
                height={200}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h4>{item.hotelName}</h4> 
                    <h6>{item.hotelLocation}</h6>
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
        </div>)})
            
            }

        </div>
      </div>
    )
  }
  