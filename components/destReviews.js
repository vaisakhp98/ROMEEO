import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'
import {AiFillStar} from 'react-icons/ai'


export default function DestReviews(props) {
  
    return (
      <div className="destReviewsSection" style={{fontFamily:'rubik',fontWeight:300}}>
          <div>
            Reviews
          </div>
          <div className="destReviewsMain">
            {props.destReviews.map((item,key)=>
            <div key={item} className="destReviewsContainer">
                <div className="destReviewsContainerImageContainer">
                    {/* <Image
                        className="mostVisitedTilesImages"
                        src={thumbnail}
                        
                    /> */}
                    {item.image}
                </div>
                <div className="destReviewsContainerReview">
                    <div>
                        <b>{item.reviewHeading}</b>
                    </div>
                    <div>
                    {item.review}
                    </div>
                </div>
                <div className="destReviewsContainerRating">
                    
                    {item.rating}
                    <AiFillStar/>
                </div>
            </div>)
            }

          </div>
          
      </div>
    );
  }

