import AdminNav from '../components/adminNav'
import AdmNewHotel from '../components/adminNewHotel'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { listHotels } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { updateHotel, deleteHotel } from '@graphql/mutations'
import ToastMessage from "@components/Toast"



const AdminNewHotel = () => {
  const [hotels, setHotels]=useState([])
  const fetchHotels = async () => {
    const locationData = await API.graphql(graphqlOperation(
      listHotels,
      {
        filter: {
          // approval: {eq: "approved"}
        }
      }
    ))
      setHotels(locationData.data.listHotels.items)
  }

  useEffect(()=>{
    fetchHotels()
  }, [])

  const handleApproval = async (e) => {
    e.preventDefault()

    await API.graphql({
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        query: updateHotel,
        variables : {input: {id: e.target.dataset.itemid, approval: e.target.dataset.approval == "approved" ? "disapproved" : "approved"}}
    })
    
    await setHotels(prevState=>{
      const newState = prevState.map((item,key) => {return key==e.target.dataset.key ? {...item, approval: e.target.dataset.approval== "approved" ? "disapproved" : "approved"} : item})
      return newState
    })
}

const handleDelete = async (e)=>{
  e.preventDefault()

  try{ 
      await API.graphql({
          query: deleteHotel,
          variables: {input: {id: e.target.dataset.itemid}},
          authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
  }
  catch(err){
      console.log(err);
      return toast("Unable to delete", {type:"success",theme:"colored"})
  }

  // delete from the array
  setHotels((prevState) => {
      prevState = prevState.filter((item, key) => key!=e.target.dataset.key)
      return prevState
  })

  await ToastMessage("Deleted", {type:"success",theme:"colored"})
}

  return (
    <div className='adminIndex'>
      <AdminNav/>
      <AdmNewHotel 
        hotels={hotels}
        handleApproval={handleApproval}
        handleDelete={handleDelete}
      />
      
    </div>
  )
}

export default AdminNewHotel
