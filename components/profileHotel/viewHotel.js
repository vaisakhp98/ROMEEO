import { API } from "aws-amplify"
import { deleteHotel, deleteLocation } from "graphql/mutations"
import { listHotels, listLocations } from "graphql/queries"
import { useEffect, useState } from "react"
import {toast} from 'react-toastify'
import Destination from "./hotel"
import EditHotel from "./editHotel"


const ViewHotel = (props) => {
    const [destinations, setDestinations] = useState([])
    const [edit, setEdit ] = useState(false)
    const [editId, setEditId] = useState(undefined)

    // fetch destinations
    useEffect(()=>{
        const fetchDestinations = async () => {
            const destinationData = await API.graphql({
               query: listHotels  
           })

            await setDestinations(destinationData.data.listHotels.items)
        }

        fetchDestinations()
    }, [props.toggleState])

    const handleEdit = (e, locationId) => {
        e.preventDefault()

        // update edit state
        setEditId(locationId)
        setEdit(true)
    }

    const handleDelete = async (e, id, index) => {
        e.preventDefault()

        try{ 
            await API.graphql({
                query: deleteHotel,
                variables: {input: {id}},
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            })
        }
        catch(err){
            console.log(err);
            return toast("Unable to delete", {type:"success",theme:"colored"})
        }

        // delete from the array
        setDestinations((prevState) => {
            prevState = prevState.filter((item, key) => key!=index)
            return prevState
        })

        await toast("Deleted", {type:"success",theme:"colored"})
    }

    if(edit) return <EditHotel id={editId} setEdit={setEdit}/>

    return (
        <>
            <h2>View Hotel</h2>
          <hr />
          {
            destinations.length!=0 ? destinations.map((item,key)=> 
            <Destination item={item} key={key}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            itemIndex={key}/>
          )
            :
            <div>
                <h3>No Hotels listed</h3>
                <p>Please add new hotel to view</p>
            </div>
        }
          
        </>
    )
}

export default ViewHotel