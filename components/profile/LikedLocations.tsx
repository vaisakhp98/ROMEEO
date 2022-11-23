import { listLikes, listLocations } from "@graphql/queries"
import { UserContext } from "@lib/context/authContext"
import { API, graphqlOperation } from "aws-amplify"
import React, { useCallback, useContext, useEffect, useState } from "react"
import Destination from "./destinationv2"
import {updateLike} from '@graphql/mutations'
import { useRouter } from "next/router"

type MyProps = {
    toggleState: number,
}

const LikedLocations = (props: MyProps) => {
    const context = useContext(UserContext)
    const [destinations, setDestinations] = useState([])
    const [like, setLike] = useState(false)

    const router = useRouter()

    const fetchDestinations = useCallback(async () => {
        // console.log("liked locations: fetch destination");
        let like1 = like
        const destinationData = await API.graphql(graphqlOperation(listLikes ,{
           filter: {
                userId: {
                    eq: context.user.sub
                },
                status: {eq: true}
            },
       })) as any

       let destins = destinationData.data.listLikes?.items.map((item, key) => {
            if(!item.location) return
            return {...item.location, id: item.id, destId: item.location.id}
        })
        await setDestinations(destins)
    }, [context.user.sub, like])

     // fetch destinations
     useEffect(()=>{
        fetchDestinations()
    }, [props.toggleState, context.user?.sub, fetchDestinations])


    const handleButton1 = (e) => {
        e.preventDefault()
        console.log(e.target.dataset)

        router.push(`/destination/${e.target.dataset.destid }`)
    }

    const handleButton2: React.MouseEventHandler<HTMLButtonElement> = async(e) => {
        // remove from liked
        e.preventDefault()

        const data = {
            id: (e.target as any).dataset.itemid,
            userId: context.user.sub,
            status: false,
        }
        
        const likeData = await API.graphql({
            query: updateLike,
            variables: {input: data},
            authMode: 'AMAZON_COGNITO_USER_POOLS',
        })

        await fetchDestinations()
    }

    return (
        <>
            <h2>Liked Destinations</h2>
            <hr />
            {
                destinations.length!=0 ? destinations.map((item,key)=> 
                <Destination 
                key={key}
                item={item} 
                button1 = "View"
                handleButton1={handleButton1}
                button2 = "Remove"
                handleButton2={handleButton2}
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

export default LikedLocations