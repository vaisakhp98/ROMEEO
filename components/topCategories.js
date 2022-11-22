import Link from 'next/link'

export default function TopCategories() {
    return (
      <div className="topCatMain">

        <Link href="/selectedCategory">
        <button className="topCatButtons bg-gray-300"> Adventure </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons bg-gray-300"> Family </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons bg-gray-300"> Romantic </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons bg-gray-300"> Signt Seeing </button>
        </Link>
        
       
        
      </div>
    )
  }
  