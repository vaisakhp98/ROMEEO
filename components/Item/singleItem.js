import {AiFillStar,AiFillHeart} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import { IconContext } from 'react-icons'
import { loadImage } from '@lib/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const SingleItem = (props) => {
    const [image, setImage] = useState()
    const {item} = props

    useEffect(()=>{
        const fetchImage = async () => {
            const url = await loadImage(item.image[0])
            setImage(url)
        }

        fetchImage()
    },[item.image])

    
    const router = useRouter()

    return(
        <Link href={`/destination/${item.id}`}>
        <a className="mostVisitedTiles">
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
                <h6> <MdLocationOn/> {item.district}</h6>
            </div>
            <div className='likeButtonSection'>
                <p>{item.rating} <AiFillStar/> </p>
                <button className='likeButton' >
                    <IconContext.Provider value={{className : "likeButtonIcon"}}>
                        <AiFillHeart/> 
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    </a></Link>)
}

export default SingleItem