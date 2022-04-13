import React from 'react'

function LoginPage() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: "100%", height: '100vh'
    }}>
      
      <form>
        <label>Email</label>
        <input type="email" value onChange></input>
        <label>Password</label>
        <input type="password" value onChange></input>
        
        <br />


      </form>
    
    </div>
  )
}

export default LoginPage