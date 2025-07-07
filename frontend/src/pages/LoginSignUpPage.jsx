import React from 'react'

function LoginSignUpPage() {

  const handleLogin = () => {}
  const handleSignup = () => {}

  return (
    <div className='basic-page-container'>
      <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div className='basic-container'>
          <p>Amader page e sign korle onek onek shubidha</p>
          <p>free khabar</p>
          <p>delivery free</p>
          <p>kissies</p>
        </div>
        <div className='basic-container' style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUpPage