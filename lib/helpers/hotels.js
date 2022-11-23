import { API, graphqlOperation } from "aws-amplify"
import { listHotels } from "../../graphql/queries"

export const searchHotel = (searchTerm, options) => {
    return new Promise(async (resolve, reject) => {
        let filter = {
            name: {wildcard: `*${searchTerm}*`},
            district: {match: options.district ?? ""}
        }

        API.graphql(graphqlOperation(listHotels ,{
            filter: filter
        })).then(()=>{
            resolve(destinationData.data.listHotels.items)
        })
        .catch((err)=> console.log(err))

    })
}
