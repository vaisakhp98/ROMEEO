import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="navMain">
      <Link href="/">
      <div className="navLeft"> Logo </div>
      </Link>
      <div className="navRight">
         <div> Nav Links </div>
         <div> 
          <div>
            <button>Login</button>
            <button>Register</button>
          </div>
         </div>
      </div>
    </div>
  )
}
