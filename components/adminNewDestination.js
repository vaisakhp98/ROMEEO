import { deleteLocation } from '@graphql/mutations'
import { listLocations } from '@graphql/queries'
import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineDashboard } from 'react-icons/ai'
import AdminItemWithApproval from './Item/AdminItemWithApproval'

export default function AdminNewDestination(props) {
    const [destinations, setDestinations] = useState([])

    const router = useRouter()
    const handleDashClick = (e)=>{
        e.preventDefault()
        router.push('/adminIndex')
    }

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
    setDestinations((prevState) => {
        prevState = prevState.reduce((item, key) => key!=id)
        return prevState
    })

    await toast("Deleted", {type:"success",theme:"colored"})
}



    return (
      <div className="adminNewHotelMain">
        <h2>New Destination</h2>
        <div className='adminNewHotelSortButton'>
          <div>
          <select name="cars" id="cars">
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="ThisWeek">This Week</option>
                <option value="ThisMonth">This Month</option>
            </select>
          </div>

          <div>
            <button onClick={handleDashClick} className="goToDashBoardButton"><AiOutlineDashboard className='dashboardIcon'/> Dashboard</button>
          </div>
          
          
        </div>
  
        {
            destinations.map((item,key)=><AdminItemWithApproval item={item} key={key} handleDelete={handleDelete}/>)} 
      </div>
    )
  }
  