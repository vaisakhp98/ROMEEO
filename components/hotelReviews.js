import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'
import { AiFillStar  } from 'react-icons/ai'


export default function HotelReviews(props) {
  
    return (
      <div className="destReviewsSection" style={{fontFamily:'rubik',fontWeight:300}}>
          <div className='destReviewsReviewSection'>
            <h3>Enter Review</h3>
            <div className='destReviewWriteReviews'>
                <div>
                    <input type="text" placeholder = "Enter the Title" className='destReviewWriteReviewsinputs'/>
                </div>
                <div>
                    <textarea  placeholder = "Enter the description" className='destReviewWriteReviewsinputs' />
                </div>
                <div>
                    <h5>Rating</h5>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
            
            </div>
            <button className='reviewSubmitButton'>Submit</button>

        </div>
          <div className="destReviewsMain">
            {props.hotelReview.map((item,key)=>
            <div key={key} className="destReviewsContainer">
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

