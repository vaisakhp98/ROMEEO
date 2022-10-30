import Image from 'next/image'
import spot from '../assets/spot.jpg'
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import {MdLocationOn} from 'react-icons/md'
import "@fontsource/rubik"


export default function RecommendedHome(props) {
    return (
      
      <div className="mostVisitedMain" style={{fontFamily:'rubik',fontWeight:300}}>
        <div className="mostVisitedText">
            Recommended
        </div>
        <div className="mostVisitedSection">
            {
            props.recommended.map((item, key)=> 
            <div key={key} className="mostVisitedTiles">
            <div className="mostVisitedTilesImagesDiv">
                <Image 
                className="mostVisitedTilesImages"
                src={item.image}
                width={290}
                height={200}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h4>{item.locationName}</h4> 
                    <h6><MdLocationOn/>{item.locationDistrict}</h6>
                </div>
                <div>
                    <p>{item.rating} <AiFillStar/> </p>
                    <button className='likeButton'>
                        <IconContext.Provider value={{className : "likeButtonIcon"}}>
                            <AiFillHeart/> 
                            </IconContext.Provider>
                        </button>
                </div>
            </div>
        </div>)
            
            }

        </div>
      </div>
    )
  }
  