import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaBeer } from 'react-icons/fa';

export default function Navigation() {

  const router = useRouter()

  const handleProfileClick = (e)=>{
      e.preventDefault()
      router.push('/profile')
  }
  const handleLoginClick = (e)=>{
    e.preventDefault()
    router.push('/login')
}
const handleSignupClick = (e)=>{
  e.preventDefault()
  router.push('/signUp')
}

  return (
    <div className="navMain">
      <Link href="/">
      <div className="navLeft"> Logo </div>
      </Link>
      <div className="navRight">
         <div className='navLinksSection'> 
          <ul className='navLinksLinks'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
           </div>
         <div> 
          <div>
            <button className='loginButton' onClick={handleLoginClick}>Login</button>
            <button className='registerButton' onClick={handleSignupClick}>Sign Up</button>
          </div>
         </div>
      </div>
    </div>
  )
}
