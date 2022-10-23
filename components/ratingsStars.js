import {BsSearch} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

export default function StarRating() {
    return (
      <div>
        <h4>Rating</h4>
        <div>{
        [...Array(5)].map((e, i) => <span className="busterCards" key={i}> <AiFillStar/></span>
        )}
            
            
        </div>
      </div>
    )
  }
  