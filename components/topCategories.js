import Link from 'next/link'

export default function TopCategories() {
    return (
      <div className="topCatMain">
        <Link href="/selectedCategory">
        <button className="topCatButtons"> Category One </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons"> Category Two </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons"> Category Three </button>
        </Link>

        <Link href="/selectedCategory">
        <button className="topCatButtons"> Category Four </button>
        </Link>
        
       
        
      </div>
    )
  }
  