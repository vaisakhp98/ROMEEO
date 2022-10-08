import Image from 'next/image'
import spot from '../assets/spot.jpg'
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'

export default function RecommendedHome(props) {
    return (
      
      <div className="mostVisitedMain">
        <div className="mostVisitedText">
            Recommended
        </div>
        <div className="mostVisitedSection">
            {
            props.recommended.map((item, key)=> 
            <div key={item} className="mostVisitedTiles">
            <div className="mostVisitedTilesImagesDiv">
                <Image 
                className="mostVisitedTilesImages"
                src={item.image}
                width={230}
                height={190}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h3>{item.locationName}</h3> 
                    <h5>{item.locationDistrict}</h5>
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
  