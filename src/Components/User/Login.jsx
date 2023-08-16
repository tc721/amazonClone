import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import { useState } from 'react';

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const signIn = e => {
  e.preventDefault()
}

const registrer = e => {
    e.preventDefault();
}

  return (
    <div className='login'>

      <Link to={"/"}>
        <img  className="logo" src="https://e7.pngegg.com/pngimages/481/52/png-clipart-amazon-com-logo-order-fulfillment-retail-organization-lord-shiva-logo-company-text.png" alt="" />
      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange = 
          {e => setEmail(e.target.value)}/>

          <h5>password</h5>
          <input type="password" value ={password}
          onChange={e => setPassword(e.target.value)}/>


          <button type = "submit" onClick={signIn}
          className='login_signInButton'>Sign in</button>

          <p>if you don´t have acccount, you can create new account..</p>
          
          <button onClick={registrer}
          className='login_registerButton'>Create new Account</button>
       
        </form>
      </div>

    </div>
  )
}

export default Login
