
export default function adminNewHotel() {

  return (
    <div className="adminNewHotelMain">
        New Hotels
      <div className='adminNewHotelSortButton'>
        <div>
            icon
        </div>
        <div>
            <button>Sort</button>
        </div>
      </div>

      <div className='adminNewHotelMainContainer'>
        <div className='adminNewHotelMainContent'>
            <div className='adminNewHotelMainContentImage'>Image</div>
            <div className='adminNewHotelMainContentDetails'>
                <div>
                    <p>Name</p>
                    <h4>Meridian Residence</h4>
                </div>

                <div>
                    <p>Location</p>
                    <h4>Munnar</h4>
                </div>

                <div>
                    <p>Description</p>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</h4>
                </div>

            </div>
            <div className='adminNewHotelMainContentButtons'>
                <button>Approve</button>
                <button>View</button>
                <button>Delete</button>
            </div>
        </div>
        <div className='adminNewHotelTagsMain'>
            <div className='adminNewHotelTags'>

                <div>
                   #facilities
                </div>
            </div>
            
        </div>
        <div className='adminNewHotelPostedBy'> 
            postedBy : Meridian Residence
        </div>

      </div>
      
    </div>
  )
}
