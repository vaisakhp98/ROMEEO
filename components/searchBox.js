import {BsSearch} from 'react-icons/bs'

export default function SearchBox() {
    return (
      <div className="searchMain">
        <input className="searchInput" placeholder="Search place Here" />
        <button className = "searchButton"> <BsSearch/> </button>
      </div>
    )
  }
  