import React from 'react';
import axios from 'axios';
import makeToast from "../Toaster";
import { useNavigate } from "react-router-dom";
// import render from 'dom-serializer';

function RegisterPage(props) {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const redirect = useNavigate();


  const registerUser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // axios used to call Backend API with route path.
    // MakeToast is used to send response from the Backend.
    axios.post('http://localhost:5000/users/register', {
      name,
      email,
      password
    }).then((response) => {
      // console.log(response.data)
      makeToast("success", response.data.message)

      // Redirect route to Login Page
      redirect("/login");
    })
    .catch(err => {
      // console.log(err.response.data.message)
      console.log(err.response.data.message)
      console.log("next")
      makeToast("error", err.response.data.message);
    });
  }

  // 
  return (
    <div className="card">
      <div className="cardHeader">Registration</div>
      <div className="cardBody">
        <div className="inputGroup"> 
        <label htmlFor="name">Name</label>
          <input 
            type="text"  
            name="name" 
            id="name" 
            placeholder="John Snow" 
            ref={nameRef}
            />
          <br/>
        <label htmlFor="email">Email</label>
          <input 
            type="email"  
            name="email" 
            id="email" 
            placeholder="abc@example.com" 
            ref={emailRef}
            />
          <br/>
        <label htmlFor="password">Password</label>
          <input 
            type="password"  
            name="password" 
            id="password" 
            placeholder="$john_snow@" 
            ref={passwordRef} 
            />
         </div>
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
}

export default RegisterPage