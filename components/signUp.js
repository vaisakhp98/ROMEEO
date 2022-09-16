import Image from 'next/image'
import thumbnail from '../assets/thumbnail.jpg'


export default function SignUp() {
  
    return (
      <div className="loginSection">
          <div className="loginMain"> 
                <div>
                    <h3>Hey there Traveller</h3>
                    <h5>Please enter your details</h5>
                </div>
                <div>
                    <div>
                        <h6>UserName</h6>
                        <input type='text' placeholder='enter username'/>
                    </div>

                    <div>
                        <h6>Email</h6>
                        <input type='email' placeholder='enter email'/>
                    </div>

                    <div>
                        <h6>Phone</h6>
                        <input type='phone' placeholder='enter email'/>
                    </div>

                    <div>
                        <h6>Password</h6>
                        <input type='password' placeholder='enter password'/>
                    </div>

                    <div>
                        <h6>Confirm Password</h6>
                        <input type='password' placeholder='enter password again'/>
                    </div>

                    <div>
                        <button>Sign Up</button>
                    </div>

                    <div>
                        already have an account ? <button>login</button>
                    </div>

                </div>
          </div>
          
      </div>
    );
  }

