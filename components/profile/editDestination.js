import { uploadImages } from "@lib/image"
import { API } from "aws-amplify"
import { updateLocation } from "graphql/mutations"
import { getLocation } from "graphql/queries"
import { useEffect, useState } from "react"

const EditDestination = (props) => {
  const {id} = props

  const [editData, setEditData] = useState({})

  const [description, setDescription] = useState("")

  // fetch edit data
  useEffect(()=>{
    const fetchEditData = async () => {
      const postData = await API.graphql({query: getLocation, variables: {id: id}})
      setEditData(postData.data.getLocation)
      setDescription(postData.data.getLocation.description)
    }

    fetchEditData()
  }, [])

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
          description: form.description.value,
          image: []
        }
  
        // validations
        if(values.name=="" || values.district=="" || Number.isInteger(values.pincode) || values.description==""){
          console.log("Values provided does not match")
          return false
        }
  
        if(form.image1.files[0] || form.image2.files[0]){
          values.image.push(form.image1.files[0])
          values.image.push(form.image2.files[0])
        }
        else{
          console.log("images 1 and 2 mandatory")
          return false
        }
  
        if(form.image3.files[0]){
          values.image.push(form.image3.files[0])
        }
  
        if(form.image4.files[0]){
          values.image.push(form.image4.files[0])
        }
  
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
            query: updateLocation,
            variables : {input: {id: editData.id, ...data}}
            })
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
        <h2>Edit Destination</h2>
          <hr />
          <form className="addDestination" onSubmit={handleEditDestination}>
            <label className="addDestinationLabels">Destination Name: </label>
            <input type='text' name="dest_name" defaultValue = {editData.name} placeholder="Destination" className="addDestinationInput"/>

            <label className="addDestinationLabels">State : </label>
            <input type='text' name="state" placeholder="State" defaultValue = {editData.state ?? ""} className="addDestinationInput"/>

            <label className="addDestinationLabels">District : </label>
            <input type='text' name="district" placeholder="District" defaultValue = {editData.district} className="addDestinationInput"/>

            <label className="addDestinationLabels">Pincode : </label>
            <input type='number' name="pincode" placeholder="Pincode" defaultValue = {editData.pincode} className="addDestinationInput"/>

            <label className="addDestinationLabels">Description : </label>
            <textarea name="description" placeholder="Description" value = {description} onChange={(e) => setDescription(e.target.value)}> </textarea>

            <label className="addDestinationLabels">Tags : </label>
            <input type='text' placeholder="Tags" className="addDestinationInput"/>
            <div className="addDestinationTagsMain">
              <div className="addDestinationTags">
                <div>Tags</div>
                <button>X</button>
              </div>
            </div>
            <div className="space-y-4 py-5">
              <input type="file" name="image1"/>
              <input type="file" name="image2"/>
              <input type="file" name="image3"/>
              <input type="file" name="image4"/>
            </div>
            
            <button className="addDestinationSubmitBtn">Save Changes</button>
            <button type="button" onClick={handleCancel} className="tabsContentBookingsMainCancel">cancel</button>

          </form> 
          </>
    )
}
export default EditDestination