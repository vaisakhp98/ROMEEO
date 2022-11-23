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
        <a className="mostVisitedTiles relative">
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
                <h6  className="flex items-center space-x-2"> <MdLocationOn/> <span>{item.district}</span></h6>
            </div>
            <div className='likeButtonSection'>
                <p>{item.rating} <AiFillStar/> </p>
                <button className='!absolute top-5 right-5' >
                    <IconContext.Provider value={{className : "likeButtonIcon"}}>
                        <AiFillHeart/> 
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    </a></Link>)
}

export default SingleItem