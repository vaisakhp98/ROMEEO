import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"

const Profile = (props) => {
    const [user, setUser] = useState({})
    const [edit, setEdit] = useState(false)
    useEffect(()=> {
      const getUser = () => (
        new Promise(async (resolve, reject) => {
          const { attributes } = await Auth.currentAuthenticatedUser()
          resolve(attributes)
        })
      )
      getUser()
      .then(res=> setUser(res))
    }, [])

    const handleEdit = (e) =>{
        e.preventDefault()
        setEdit(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target

        const user = await Auth.currentAuthenticatedUser()
        Auth.updateUserAttributes(user, {phone_number: form.phone.value, name: form.name.value})
        setEdit(false)
    }

    let className=`${edit && "border border-gray-200 px-4 "} block w-full py-2 mt-2 text-gray-700 bg-white rounded-md focus:border-blue-400 disabled:focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`

    let buttonClassName="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
    return (
        // <>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 " htmlFor="username">Username</label>
                            <input id="username" name="name" defaultValue={user.name} type="text" className={className} disabled={!edit}/>
                        </div>

                        <div>
                            <label className="text-gray-700" htmlFor="emailAddress">Email</label>
                            <span  type="email" className="block w-full py-2 mt-2 text-gray-700 bg-white rounded-md focus:border-blue-400 disabled:focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">{user.email}</span>
                        </div>

                        <div>
                            <label className="text-gray-700" htmlFor="phone">Phone</label>
                            <input id="phone" name="form" defaultValue={user.phone_number} type="number" className={className} disabled={!edit}/>
                        </div>

                    </div>

                    <div className="flex justify-end mt-6">
                        {
                            edit ? 
                            <button className={buttonClassName}>Save</button>
                            :
                            <button type="button" className={buttonClassName} onClick={handleEdit}>Edit</button>
                        }
                    </div>
                </div>
            </form>
        </section>
      
    )
}

export default Profile