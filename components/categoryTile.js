import Image from 'next/image'
import spot from '../assets/spot.jpg'
import { useRouter } from 'next/router';
import{AiFillStar,AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'

export default function CategoryTile(props) {
    const router = useRouter()

    const handleMostVisitedClick = (e)=>{
        e.preventDefault()
        router.push('/destination')
    }
    return (
      
        <div className="mostVisitedMain">
        <div className="mostVisitedText">
            Recommended
        </div>
        <div className="mostVisitedSection">
            {
            props.selectedCategory.map((item, key)=> 
            <div key={key} className="mostVisitedTiles">
            <div onClick={handleMostVisitedClick} className="mostVisitedTilesImagesDiv">
                <Image 
                className="mostVisitedTilesImages"
                src={item.image}
                width={260}
                height={200}
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
  