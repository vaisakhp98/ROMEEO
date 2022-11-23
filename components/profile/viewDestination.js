import { UserContext } from "@lib/context/authContext"
import { API, graphqlOperation } from "aws-amplify"
import { deleteLocation } from "graphql/mutations"
import { listLocations } from "graphql/queries"
import { useContext, useEffect, useState } from "react"
import toast from "@components/Toast" 
import Destination from "./destination"
import EditDestination from "./editDestination"


const ViewDestination = (props) => {
    const context = useContext(UserContext)
    const [destinations, setDestinations] = useState([])
    const [edit, setEdit ] = useState(false)
    const [editId, setEditId] = useState(undefined)

    // fetch destinations
    useEffect(()=>{
        const fetchDestinations = async () => {
            const destinationData = await API.graphql(graphqlOperation( listLocations ,{
               filter: {
                    userId: {eq: context.user.sub}
                },
           }))

            await setDestinations(destinationData.data.listLocations.items)
        }

        fetchDestinations()
    }, [props.toggleState, context.user.sub])

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
        setDestinations((prevState) => {
            prevState = prevState.filter((item, key) => key!=index)
            return prevState
        })
        await toast("Deleted", {type:"success",theme:"colored"})
    }

    if(edit) return <EditDestination id={editId} setEdit={setEdit}/>

    return (
        <>
            <h2>View Destination</h2>
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
                <h3>No Destinations listed</h3>
                <p>Please add new destination to view</p>
            </div>
        }
          
        </>
    )
}

export default ViewDestination