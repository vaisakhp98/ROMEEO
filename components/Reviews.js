import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'
import {AiFillStar} from 'react-icons/ai'
import { useContext } from 'react';
import { UserContext } from '@lib/context/authContext';


export default function DestReviews(props) {
    const context = useContext(UserContext)
    return (
      <div className="destReviewsSection" style={{fontFamily:'rubik',fontWeight:300}}>
        { context.user && <form className='destReviewsReviewSection' onSubmit={props.addReview}>
            <h3>Enter Review</h3>
            <div className='destReviewWriteReviews'>
                <div>
                    <input name = "title" type="text" placeholder = "Enter the Title" className='destReviewWriteReviewsinputs border border-gray-500'/>
                </div>
                <div>
                    <textarea name="content"  placeholder = "Enter the description" className='destReviewWriteReviewsinputs border border-gray-500' />
                </div>
                <div className="flex items-center py-3 space-x-2">
                    <h5>Rating</h5>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
            
            </div>
            <button type="submit" className='reviewSubmitButton bg-green-800 text-white rounded'>Submit</button>

        </form>
}
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
                        <b>{item.title}</b>
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

