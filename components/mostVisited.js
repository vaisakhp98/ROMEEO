import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useRouter } from 'next/router';
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import axios from 'axios';
import { useEffect } from 'react';

export default function MostVisited(props) {

    const image = './Pages/api/homePageMostVisited'

    const router = useRouter()

    const handleMostVisitedClick = (e)=>{
        e.preventDefault()
        router.push('/destination')
    }
    return (
      
      <div className="mostVisitedMain">
        <div className="mostVisitedText">
            Most Visited
        </div>
        <div className="mostVisitedSection">
            {
            props.mostVisited.map((item, key)=>{ 
            return(
            
            <div key={key} className="mostVisitedTiles" onClick={handleMostVisitedClick}>
            <div className="mostVisitedTilesImagesDiv">
                <img 
                className="mostVisitedTilesImages"
                src={item.image}
                width={250}
                height={200}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h3>{item.locationName}</h3> 
                    <h5>{item.locationDistrict}</h5>
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
  