import {BsSearch} from 'react-icons/bs'

export default function SearchBox() {
    return (
      <div className="searchMain relative z-10">
        <input className="searchInput" placeholder="Search place Here" />
        <button className = "searchButton"> <BsSearch/> </button>
      </div>
    )
  }
  