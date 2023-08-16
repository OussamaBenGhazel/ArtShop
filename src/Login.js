import React from 'react'
import { Link } from 'react-router-dom'
export default function Login(props) {

  const {email,password,setEmail,setPassword,emailError,passwordError,handlelogin} =props

  return (
    <>
    <div className='alert alert-warning warning' role='alert'>
      This is a warning alert 
      <Link to='/'>Back to Home Page</Link>
    </div>
    <section className='login'>
      <div className='loginContainer'>
        <h3 className='Title'>Login</h3>
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} type='email' autoFocus required/>
        <p className='errorMsg'>{emailError}</p>
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type='password'  required/>
        <p className='errorMsg'>{passwordError}</p>
        <div className='btnContainer'> 
         <>
         <button onClick={handlelogin}>Login</button>
         <p className='reset-pwd'>Reset password</p>
         </> 
        </div>
      </div>
    </section>
    </>
  )
}
