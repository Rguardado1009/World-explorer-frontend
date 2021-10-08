import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardButton,
  CardLink
} from "../Signup css";

function Login({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="authForm">
      <Redirect to="/" />
      <CardWrapper className="teams">
          <CardHeader>
          <img src="https://res.cloudinary.com/airlines/image/upload/c_scale,w_300/v1633633047/logo512_gmswgz.png" alt="Logo"/>
            <CardHeading>Log in to</CardHeading>
            <CardHeading>Flight Explorer</CardHeading>
          </CardHeader>
  
          <CardBody>
            <CardFieldset>
              <CardInput 
                    type="text"
                    placeholder="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </CardFieldset>
  
            <CardFieldset>
              <CardInput 
               type="password"
               placeholder="Password"
               required
               value={password}
               onChange={(e) => setPassword(e.target.value)} />
              <CardIcon />
            </CardFieldset>  
  
            <CardFieldset>
              <CardButton type="submit" onClick={handleSubmit}>Sign in</CardButton>
            </CardFieldset>
            <CardFieldset>
              <Link to="/signup">
              <CardLink>Sign Up</CardLink>
              </Link>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
    </div>
  )
}

export default Login
