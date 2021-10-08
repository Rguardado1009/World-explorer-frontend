import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
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

function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            history.push('/airlines')
          })
        // } else {
        //   setCurrentUser({ username: "rguardado" })
        //   history.push('/')
        //   res.json().then(errors => {
        //     console.error(errors)
        //   })
        }
      })
  }
  return (
    <div className="authForm">
      <CardWrapper className="teams">
          <CardHeader>
      <img src="https://res.cloudinary.com/airlines/image/upload/c_scale,w_300/v1633633047/logo512_gmswgz.png" alt="Logo"/>
            <CardHeading>Welcome Please Signup</CardHeading>
          </CardHeader>
  
          <CardBody>
            <CardFieldset>
              <CardInput 
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </CardFieldset>
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
              <CardInput 
               type="password"
               placeholder="Conf Password"
               required
               value={passwordConfirmation}
               onChange={(e) => setPasswordConfirmation(e.target.value)} />
              <CardIcon />
            </CardFieldset>   
            <CardFieldset>
              <CardButton type="submit" onClick={handleSubmit}>Sign Up</CardButton>
            </CardFieldset>
            <CardFieldset>
              <Link to="/">
              <CardLink>I already have an account</CardLink>
              </Link>
            </CardFieldset>
          </CardBody>
        </CardWrapper>
    </div>
  )
}

export default Signup
