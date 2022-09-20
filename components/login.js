import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'
import { useRouter } from 'next/router';

export default function Login() {

    return (
      <div className="loginSection">
          <div className="loginMain"> 
            <div>
                    <h2>Welcome Back</h2>
                    <h4>Welcome Back Traveller Please fill in your details</h4>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userNameLoginName'>Username</p>
                    <input type='text' placeholder='username' className='userNameLoginInput'/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>Password</p>
                    <input type='password' placeholder='password' className='userPasswordLoginInput'/>
            </div>
            <div className='forgotPasswordLogin'>
                <button className='forgotPasswordButton'>forgot password</button>
            </div>
                
            <div className='loginPageButtonMain'>
                <button className='loginPageButton'>Login</button>
            </div>

            <div className='loginDontHaveAnAccount'>
                <p>dont have an account ? </p><button className='loginDontHaveAnAccountBtn'>Sign Up</button>
            </div>

          </div>
          
      </div>
    );
  }

