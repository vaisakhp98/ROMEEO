import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useRouter } from 'next/router';
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
import axios from 'axios';

export default function MostVisited() {

   

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
            [...Array(8)].map((e,i)=> 
            <div key={i} className="mostVisitedTiles" onClick={handleMostVisitedClick}>
            <div className="mostVisitedTilesImagesDiv">
                <Image 
                className="mostVisitedTilesImages"
                src={spot}
                width={140}
                height={170}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h3>Munnar</h3> 
                    <h5>Locatoion</h5>
                </div>
                <div>
                    <p>5 <AiFillStar/> </p>
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
  