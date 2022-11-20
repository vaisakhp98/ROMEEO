import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'
import {AiFillStar} from 'react-icons/ai'


export default function DestReviews(props) {
  
    return (
      <div className="destReviewsSection" style={{fontFamily:'rubik',fontWeight:300}}>
        <form className='destReviewsReviewSection' onSubmit={props.addReview}>
            <h3>Enter Review</h3>
            <div className='destReviewWriteReviews'>
                <div>
                    <input name = "title" type="text" placeholder = "Enter the Title" className='destReviewWriteReviewsinputs'/>
                </div>
                <div>
                    <textarea name="content"  placeholder = "Enter the description" className='destReviewWriteReviewsinputs' />
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
            <button type="submit" className='reviewSubmitButton'>Submit</button>

        </form>

          <div>
            <h3>Reviews</h3>
          </div>
          <div className="destReviewsMain">
            {
            props.reviews.length == 0 ?
            "No Reviews Yet"
            :
            props.reviews.map((item,key)=>
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
                        <b>{item.userId}</b>
                    </div>
                    <div>
                    {item.content}
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

