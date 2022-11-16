import { API } from "aws-amplify"
import { deleteLocation } from "graphql/mutations"
import { listLocations } from "graphql/queries"
import { useEffect, useState } from "react"
import {toast} from 'react-toastify'


const ViewDestination = (props) => {
    const [destinations, setDestinations] = useState([])

    // fetch destinations
    useEffect(()=>{
        const fetchDestinations = async () => {
            const destinationData = await API.graphql({
               query: listLocations  
           })

            await setDestinations(destinationData.data.listLocations.items)
        }

        fetchDestinations()
    }, [props.toggleState])

    const handleDelete = async (e, id) => {
        e.preventDefault()

        try{ 
            await API.graphql({
                query: deleteLocation,
                variables: {input: {id}},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            })
        }
        catch(err){
            console.log(err);
            return toast("Unable to delete", {type:"success",theme:"colored"})
        }

        // delete from the array
        setDestinations((state) => state.remove(key))

        await toast("Deleted", {type:"success",theme:"colored"})
    }


    return (
        <>
            <h2>View Destination</h2>
          <hr />
          {
            destinations.length!=0 ? destinations.map((item,key)=> 
            <div key={key} className="tabsContentBookingsSection">
                <div className="tabsContentBookingsMain">
                <div className="tabsContentBookingsMain-Image">Image</div>
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
                    {/* <button onClick={handleviewHotelClick}  className="tabsContentBookingsMainViewHotel">Edit</button> */}
                    <button onClick={(e) => handleDelete(e, item.id, key)} className="tabsContentBookingsMainCancel">Delete</button>
                </div>
                </div>
            </div>
          )
            :
            <div>
                <h3>No Destinations listed</h3>
                <p>Please add new destination to view</p>
            </div>
        }
          
        </>
    )
}

export default ViewDestination