import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'
import { useRouter } from 'next/router';

export default function Login() {

    return (
      <div className="loginSection">
          <div className="loginMain"> 
                <div>
                    <h3>Welcome Back</h3>
                    <h5>Welcome Back please enter your details</h5>
                </div>
                <div>
                    <div>
                        <h6>UserName</h6>
                        <input type='text' placeholder='enter username'/>
                    </div>

                    <div>
                        <h6>Password</h6>
                        <input type='password' placeholder='enter password'/>
                    </div>

                    <div>
                        forgot password
                    </div>

                    <div>
                        <button>Login</button>
                    </div>

                    <div>
                        dont have an account ? <button>signUp</button>
                    </div>

                </div>
          </div>
          
      </div>
    );
  }

