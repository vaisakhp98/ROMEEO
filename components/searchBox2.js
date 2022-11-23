import {BsSearch} from 'react-icons/bs'

export default function SearchBox2(props) {
    return (
      <div className="searchMain2">
        <input className="searchInput2" placeholder="Search place Here" onChange={props.handleChange}/>
        <button className = "searchButton2" onClick={props.handleSearch}> <BsSearch/> </button>
      </div>
    )
  }
  