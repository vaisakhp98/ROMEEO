import { UserContext } from "@lib/context/authContext"
import { uploadImages } from "@lib/image"
import { API } from "aws-amplify"
import { createLocation } from "graphql/mutations"

const AddDestination = () => {
  const context = useContext(UserContext)
    /**
     * Validate the form 
     * @param {Form object} form 
     * @returns 
     */
    const validateForm = (form) => {
        const values = {
          name: form.dest_name.value,
          // state: form.state.value,
          approval: "pending",
          district: form.district.value,
          pincode: form.pincode.value,
          description: form.description.value,
          userId: context.user.sub,
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
      const handleAddDestination = (e) => {
        e.preventDefault()
  
        const form = e.target
  
        // validate form
        const data = validateForm(form)
        
        if(!data) return

        // upload images and get file names
        uploadImages(data.image)
        .then(async (res) => {
            data.image=res

            // call api
            await API.graphql({
            authMode: 'AMAZON_COGNITO_USER_POOLS',
            query: createLocation ,
            variables : {input: data}
            })
        })
        .catch(err => console.log(err))
      }
  
    return (
        <>
        <h2>Add Destination</h2>
          <hr />
          <form className="addDestination" onSubmit={handleAddDestination}>
            <label className="addDestinationLabels">Destination Name: </label>
            <input type='text' name="dest_name" placeholder="Destination" className="addDestinationInput"/>

            <label className="addDestinationLabels">State : </label>
            <input type='text' name="state" placeholder="State" className="addDestinationInput"/>

            <label className="addDestinationLabels">District : </label>
            <input type='text' name="district" placeholder="District" className="addDestinationInput"/>

            <label className="addDestinationLabels">Pincode : </label>
            <input type='number' name="pincode" placeholder="Pincode" className="addDestinationInput"/>

            <label className="addDestinationLabels">Description : </label>
            <textarea name="description" placeholder="Description"> </textarea>

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

            {/* <div className="addDestinationImageAddMain">
              
              <div className="addDestinationImageAdd">
                Image 1
              </div>
              <div className="addDestinationImageAdd">
                2
              </div>
              <div className="addDestinationImageAdd">
                3
              </div>
              <div className="addDestinationImageAdd">
                4
              </div>
            </div> */}
            
            <button className="addDestinationSubmitBtn">Submit</button>

          </form> 
          </>
    )
}
export default AddDestination