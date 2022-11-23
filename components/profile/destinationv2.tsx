import { TDestination } from "@lib/types/destination"
import { Storage } from "aws-amplify"
import { useEffect, useState } from "react"

type MyProps = {
    item: TDestination,
    button1?: string,
    handleButton1?: React.MouseEventHandler<HTMLButtonElement>
    button2: string
    handleButton2: React.MouseEventHandler<HTMLButtonElement>
    itemIndex: number
}

const Destination = (props: MyProps) => {
    const {item} = props
    const [image, setImage] = useState(undefined)

    useEffect(()=>{
        const fetchImage = async () => {
            if(!item) return 
            if (item.image[0]) {
                const imageKey = await Storage.get(item.image[0])
                setImage(imageKey)
            }
        }
        fetchImage()
    }, [])

    if(!item) return <></>

    return (
        <div className="tabsContentBookingsSection">
                <div className="tabsContentBookingsMain">
                <div className="tabsContentBookingsMain-Image">
                {
                    image &&
                    <img src={image} className="tabsContentBookingsMainImageMain"/>
                }
                </div>
                <div className="tabsContentBookingsMain-Details">
                    <div className="profileViewDestination">
                    <p>Location Name :</p>
                    <h4>{item.name}</h4>
                    </div>

                    <div className="profileViewDestination">
                    <p>Location :</p>
                    <h4>{item.district}</h4>
                    </div>

                    <div className="profileViewDestination">
                    <p>Discription :</p>
                    <h4 className="truncate ...">{item.description}</h4>
                    </div>

                    <div className="profileViewDestination">
                    <p>Tags :</p>
                    <h4>#{item.Tags}</h4>
                    </div>
                    
                </div>
                <div className="tabsContentBookingsMain-Buttons">
                    {props.button1 && <button data-destId = {item.destId} data-itemid = {item.id} data-key={props.itemIndex}  onClick={props.handleButton1} className="tabsContentBookingsMainViewHotel">{props.button1}</button>}
                    <button data-destId = {item.destId}  data-itemid = {item.id} data-key={props.itemIndex}  onClick={props.handleButton2} className="tabsContentBookingsMainCancel">{props.button2}</button>
                </div>
                </div>
            </div>
    )
}

export default Destination