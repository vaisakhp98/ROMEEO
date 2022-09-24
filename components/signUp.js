
export default function signUp() {

    return (
      <div className="loginSection">
          <div className="loginMain"> 
            <div>
                    <h2>Nice to Meet you</h2>
                    <h4>Welcome Traveller Please fill in your details accordingly</h4>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userNameLoginName'>Username</p>
                    <input type='text' placeholder='username' className='userNameLoginInput'/>
            </div>


            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>E-mail</p>
                    <input type='email' placeholder='email' className='userPasswordLoginInput'/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>Phone</p>
                    <input type='number' placeholder='phone' className='userPasswordLoginInput'/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>SignUp As :</p>
                    Traveller <input type='radio' value='Traveller' name='Traveller' className='signUpRadioTraveller'/>
                    Hotel <input type='radio' value='Traveller' name='Traveller'/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>Password</p>
                    <input type='password' placeholder='password' className='userPasswordLoginInput'/>
            </div>

            <div className='userNameLoginMain'>
                    <p className='userPasswordLogin'>Confirm Password</p>
                    <input type='password' placeholder='password' className='userPasswordLoginInput'/>
            </div>

           


                
            <div className='loginPageButtonMain'>
                <button className='loginPageButton'>Sign Up</button>
            </div>

            <div className='loginDontHaveAnAccount'>
                <p> already have an account ? </p><button className='loginDontHaveAnAccountBtn'>Login</button>
            </div>

          </div>
          
      </div>
    );
  }

