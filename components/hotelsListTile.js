import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useRouter } from 'next/router';
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import axios from 'axios';
import { useEffect } from 'react';
export default function HotelsListTile() {
    return (
      
        <div className="mostVisitedMain">
        <div className="mostVisitedText">
            Most Visited
        </div>
        <div className="mostVisitedSection">
            
            <div  className="mostVisitedTiles" >
            <div className="mostVisitedTilesImagesDiv">
                <Image 
                className="mostVisitedTilesImages"
                src={spot}
                width={140}
                height={170}
                >{}</Image>
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h3>Meridian</h3> 
                    <h5>Munnar</h5>
                </div>
                <div>
                    <p> 5<AiFillStar/> </p>
                    <button className='likeButton'>
                        <IconContext.Provider value={{className : "likeButtonIcon"}}>
                            <AiFillHeart/> 
                            </IconContext.Provider>
                        </button>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
  