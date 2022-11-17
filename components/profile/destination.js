import { Storage } from "aws-amplify"
import { useEffect, useState } from "react"

const Destination = (props) => {
    const {item} = props
    const [image, setImage] = useState(undefined)

    useEffect(()=>{
        const fetchImage = async () => {
            if (item.image[0]) {
                const imageKey = await Storage.get(item.image[0])
                setImage(imageKey)
            }
        }
        fetchImage()
    }, [])

    if(!item) <>Loading</>

    return (
        <div className="tabsContentBookingsSection">
                <div className="tabsContentBookingsMain">
                <div className="tabsContentBookingsMain-Image">
                {
                    image &&
                    <img src={image} className="tabsContentBookingsMainImageMain"/>
                }
                </div>
                <div className="tabsContentBookingsMain-Details">
                    <div className="profileViewDestination">
                    <p>Location Name :</p>
                    <h4>{item.name}</h4>
                    </div>

                    <div className="profileViewDestination">
                    <p>Location :</p>
                    <h4>{item.district}</h4>
                    </div>

                    <div className="profileViewDestination">
                    <p>Discription :</p>
                    <h4>{item.description}</h4>
                    </div>

                    <div className="profileViewDestination">
                    <p>Tags :</p>
                    <h4>#{item.locationTags}</h4>
                    </div>
                    
                </div>
                <div className="tabsContentBookingsMain-Buttons">
                    <button  onClick={(e)=>{props.handleEdit(e, item.id)}} className="tabsContentBookingsMainViewHotel">Edit</button>
                    <button onClick={(e) => props.handleDelete(e, item.id, props.itemIndex)} className="tabsContentBookingsMainCancel">Delete</button>
                </div>
                </div>
            </div>
    )
}

export default Destination