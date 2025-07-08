import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginModal from '../modals/LoginModal';
import SignupModal from '../modals/SignupModal';

function LoginSignUpPage() {
  
  const [loginModalActive, setLoginModalActive] = useState(false);
  const [signupModalActive, setSignupModalActive] = useState(false);

  const handleLogin = () => {setLoginModalActive(true)}
  const handleSignup = () => {setSignupModalActive(true)}

  return (
    <div className='basic-page-container' style={{height: '80vh', width: '90vw', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div className='basic-container'>
          <p>Amader page e sign korle onek onek shubidha</p>
          <p>free khabar</p>
          <p>delivery free</p>
          <p>kissies</p>
          <p>blah blah blah...</p>
        </div>
        <div className='basic-container' style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>

      {loginModalActive && (<LoginModal isOpen={loginModalActive} onClose={() => setLoginModalActive(false)}/>)}
      {signupModalActive && (<SignupModal isOpen={signupModalActive} onClose={() => setSignupModalActive(false)}/>)}
    </div>
  )
}

export default LoginSignUpPage