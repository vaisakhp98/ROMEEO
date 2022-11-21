import { UserContext } from "@lib/context/authContext"
import { uploadImages } from "@lib/image"
import { API } from "aws-amplify"
import { updateHotel, updateLocation } from "graphql/mutations"
import { getHotel, getLocation } from "graphql/queries"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const EditHotel = (props) => {
  const context = useContext(UserContext)
  const router = useRouter()

  const {id} = props

  const [editData, setEditData] = useState({})

  const [description, setDescription] = useState("")

  // fetch edit data
  useEffect(()=>{
    const fetchEditData = async () => {
      const postData = await API.graphql({query: getHotel, variables: {id: id}})
      setEditData(postData.data.getHotel)
      setDescription(postData.data.getHotel.description)
    }

    fetchEditData()
  }, [id])

    /**
     * Validate the form 
     * @param {Form object} form 
     * @returns 
     */
    const validateForm = (form) => {
        const values = {
          name: form.dest_name.value,
        //   state: form.state.value,
          district: form.district.value,
          pincode: form.pincode.value,
          desciption: form.description.value,
          userId: context.user.sub,
          max: form.max.value,
          price: form.price.value,
          image: []
        }
  
        // validations
        if(values.name=="" || values.district=="" || Number.isInteger(values.pincode) || values.description==""){
          console.log("Values provided does not match")
          return false
        }
  
        [...new Array(4)].map((_, key)=>{
          if(form.image[key].files[0]){
            values.image.push(form.image[key].files[0])
          }
          else if(editData.image[key]){
            values.image.push(editData.image[key])
          }
        })
  
        return values
    }
  
    /**
     * Add destination
     * 
     * @param {Event} e 
     */
      const handleEditDestination = (e) => {
        e.preventDefault()
  
        const form = e.target
  
        // validate form
        const data = validateForm(form)
        data.description = description

        if(!data) return

        

        // upload images and get file names
        uploadImages(data.image)
        .then(async (res) => {
            data.image=res

            // call api
            await API.graphql({
            authMode: 'AMAZON_COGNITO_USER_POOLS',
            query: updateHotel,
            variables : {input: {id: editData.id, ...data}}
            })

            props.setEdit(false)
        })
        .catch(err => console.log(err))
      }
  
      /**
       * Close edit window
       * 
       * @param {Event} e
       */
      const handleCancel = (e) => {
        e.preventDefault()

        props.setEdit(false)
      }
    return (
        <>
        <h2>Edit hotel</h2>
          <hr />
          <form className="addDestination" onSubmit={handleEditDestination}>
            <label className="addDestinationLabels">Hotel Name: </label>
            <input type='text' name="dest_name" defaultValue = {editData.name} placeholder="Destination" className="addDestinationInput border"/>

            <label className="addDestinationLabels">State : </label>
            <input type='text' name="state" placeholder="State" defaultValue = {editData.state ?? ""} className="addDestinationInput border"/>

            <label className="addDestinationLabels">District : </label>
            <input type='text' name="district" placeholder="District" defaultValue = {editData.district} className="addDestinationInput border"/>

            <label className="addDestinationLabels">Pincode : </label>
            <input type='number' name="pincode" placeholder="Pincode" defaultValue = {editData.pincode} className="addDestinationInput border"/>
            <label className="addDestinationLabels">Price : </label>
            <input type='number' name="price" placeholder="Pincode" defaultValue = {editData.price} className="addDestinationInput border"/>

            <label className="addDestinationLabels">Max guests in one room : </label>
            <input type='number' name="max" placeholder="Max" defaultValue = {editData.max} className="addDestinationInput border"/>

            <label className="addDestinationLabels">Description : </label>
            <textarea name="description" className="border" placeholder="Description" value = {description} onChange={(e) => setDescription(e.target.value)}> </textarea>

            <label className="addDestinationLabels">Tags : </label>
            <input type='text' placeholder="Tags" className="addDestinationInput border"/>
            <div className="addDestinationTagsMain">
              <div className="addDestinationTags ">
                <div>Tags</div>
                <button>X</button>
              </div>
            </div>
            <div className="space-y-4 py-5">
              <input type="file" name="image"/>
              <input type="file" name="image"/>
              <input type="file" name="image"/>
              <input type="file" name="image"/>
            </div>
            
            <button className="addDestinationSubmitBtn">Update Changes</button>
            <button type="button" onClick={handleCancel} className="tabsContentBookingsMainCancel">cancel</button>

          </form> 
          </>
    )
}
export default EditHotel