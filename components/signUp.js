import React , {useRef} from "react"
import { useAuth } from "../contexts/authContext"
import { auth } from "../firebase"


export default function signUp() {

        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const { signup } = useAuth()

        function handleSubmit(e){
                e.preventDefault()

                signup(emailRef.current.value , passwordRef.current.value)
        }

    return (
      <div className="loginSection">
          <div className="loginMain"> 
            <div>
                    <h2>Nice to Meet you</h2>
                    <h4>Welcome Traveller Please fill in your details accordingly</h4>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userNameLoginName'>Username</p>
                    <input type='text' placeholder='username' className='userNameLoginInput' id="username" />
            </div>


            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>E-mail</p>
                    <input type='email' placeholder='email' className='userPasswordLoginInput' id="email" ref={emailRef}/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>Phone</p>
                    <input type='number' placeholder='phone' className='userPasswordLoginInput' id="phone"/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>SignUp As :</p>
                    Traveller <input type='radio' value='Traveller' name='Traveller' className='signUpRadioTraveller' id="traveller"/>
                    Hotel <input type='radio' value='hotel' name='hotel' id="hotel"/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>Password</p>
                    <input type='password' placeholder='password' className='userPasswordLoginInput' id="password" ref={passwordRef}/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>Confirm Password</p>
                    <input type='password' placeholder='password' className='userPasswordLoginInput' id="passwordConfirmation" ref={passwordConfirmRef}/>
            </div>

           


                
            <div className='loginPageButtonMain'>
                <button className='loginPageButton' type="submit">Sign Up</button>
            </div>

            <div className='loginDontHaveAnAccount'>
                <p> already have an account ? </p><button className='loginDontHaveAnAccountBtn'>Login</button>
            </div>

          </div>
          
      </div>
    );
  }

