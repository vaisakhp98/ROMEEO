import Image from 'next/image'
import spot from '../assets/spot.jpg'
import Link from 'next/link'

export default function CategoryTile() {
    return (
      
      <div className="mostVisitedMain">
        <div className="mostVisitedText">
            Your Category
        </div>
        <Link href= "/destination" >
        <div className="mostVisitedSection">
            {
            [...Array(16)].map((e,i)=> 
            <div key={i} className="mostVisitedTiles">
            <div className="mostVisitedTilesImagesDiv">
                <Image 
                className="mostVisitedTilesImages"
                src={spot}
                width={140}
                height={160}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h3>Munnar</h3> 
                    <h5>Locatoion</h5>
                </div>
                <div>
                    <p>5 Star </p>
                    <button >Like </button>
                </div>
            </div>
        </div>)
            
            }

        </div>
        </Link>
      </div>
    )
  }
  