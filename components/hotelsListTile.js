import Image from 'next/image'
import hotel from '../assets/hotel2.jpg'
import Link from 'next/link'

export default function HotelsListTile() {
    return (
      
      <div className="mostVisitedMain">
        <div className="mostVisitedText">
            Hotels
        </div>
        <Link href= "/hotel" >
        <div className="mostVisitedSection">
            {
            [...Array(16)].map((e,i)=> 
            <div key={i} className="mostVisitedTiles">
            <div className="mostVisitedTilesImagesDiv">
                <Image 
                className="mostVisitedTilesImages"
                src={hotel}
                width={140}
                height={160}
                />
            </div>
            
            <div className='mostVisitedTilesBtm'>
                <div>
                    <h3>High Roller</h3> 
                    <h5>Munnar</h5>
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
  