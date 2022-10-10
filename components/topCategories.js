import Link from 'next/link'

export default function TopCategories() {
    return (
      <div className="topCatMain">

        <Link href="/selectedCategory">
        <button className="topCatButtons"> Adventure </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons"> Family </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons"> Romantic </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons"> Signt Seeing </button>
        </Link>
        
       
        
      </div>
    )
  }
  