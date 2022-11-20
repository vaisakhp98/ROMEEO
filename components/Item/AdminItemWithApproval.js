import { updateLocation } from '@graphql/mutations'
import { loadImage } from '@lib/image'
import { API } from 'aws-amplify'
import { useEffect, useState } from 'react'
import {FaMountain} from 'react-icons/fa'
import {GiSkier} from 'react-icons/gi'
import { MdFamilyRestroom } from 'react-icons/md'


const AdminItemWithApproval = (props) => {
    const {item} = props

    const [approval, setApproval] = useState(item.approval)
    const [image, setImage] = useState()

    useEffect(()=>{
        const fetchImage = async () => {
            const url = await loadImage(item.image[0])
            setImage(url)
        }

        fetchImage()
    },[item.image])

    const handleApproval = async () => {
        await API.graphql({
            authMode: 'AMAZON_COGNITO_USER_POOLS',
            query: updateLocation,
            variables : {input: {id: item.id, approval: approval == "approved" ? "disapproved" : "approved"}}
        })
        setApproval(approval == "approved" ? "disapproved" : "approved")
    }


    return (
        <div className='adminNewHotelMainContainer'>
          <div className='adminNewHotelMainContent'>
              <div className=''><div className="mostVisitedTilesImagesDiv">
                    <img 
                    className="mostVisitedTilesImages"
                    src={image}
                    width={135}
                    height={135}
                    />
                </div>
                </div>
              <div className='adminNewHotelMainContentDetails'>
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Name :</p>
                      <h4>{item.name}</h4>
                  </div>
  
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Location :</p>
                      <h4>{item.district}</h4>
                  </div>
  
                  <div className="adminNewHotelMainContentDetailsDetail">
                      <p>Description :</p>
                      <h4>{item.description}</h4>
                  </div>
  
              </div>
              <div className='adminNewHotelMainContentButtons'>
                  <button className = 'adminNewHotelMainContentButtonsApprove' onClick={handleApproval}>{(approval == "approved") ? "Disapprove" : "Approve"}</button>
                  <button className='adminNewHotelMainContentButtonsDelete' onClick={props.handleDelete}>Delete</button>
              </div>
          </div>

          
            <div className='adminNewHotelMainTags'>
                
                <div className='adminNewHotelTags'>
                    <div className='adminNewHotelTagsTag'>
                    <div><GiSkier/></div>
                    <div>Sking </div>
                    </div> 
                </div>

                <div className='adminNewHotelTags'>
                    <div className='adminNewHotelTagsTag'>
                    <div><MdFamilyRestroom/></div>
                    <div>Family </div>
                    </div> 
                </div>

                <div className='adminNewHotelTags'>
                    <div className='adminNewHotelTagsTag'>
                    <div><FaMountain/></div>
                    <div>Sight Seeing</div>
                    </div> 
                </div>

                

            </div>

          
          <div className='adminNewHotelPostedBy'> 
              <h4>postedBy : {item.userId}</h4>
          </div>
        </div>
    )
}

export default AdminItemWithApproval