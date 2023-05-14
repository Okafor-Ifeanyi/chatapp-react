import React from 'react'
import axios from 'axios';
import makeToast from "../Toaster";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // Create Ref to store user input
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  // initialising "useNavigate" in a function component cause it wont work properly else where
  const redirect = useNavigate(); 

  const loginUser = () => {
    // Create an Instance for the user current input
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // axios used to fetch Backend API with route path.
    // MakeToast is used to send response from the Backend.
    axios.post('http://localhost:5000/users/login', {
      email,
      password
    }).then((response) => {

      console.log(response.data)
      makeToast("success", response.data.message); // Display backlog Message
      try {
        window.localStorage.setItem("token", response.data.token) // Storing my JWT Token
      } catch (error) {
        console.log(error)
      }
      // window.localStorage.getItem('token')
      redirect("/dashboard") // Take me to the dashboard now

    })
    .catch(err => {
      console.log("next")
      makeToast("error", err.response.data.message); // Display backlog Message
    });
  }

  // 
  return (
    <div className="card">
      <div className="cardHeader">Login</div>
      <div className="cardBody">
        <div className="inputGroup"> 
        <label htmlFor="email">Email</label>
          <input 
            type="email"  
            name="email" 
            id="email" 
            placeholder="abc@example.com" 
            ref={emailRef} // Return message as a ref
          />
          <br/>
        <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="john_snow" 
            ref={passwordRef} // Return message as a ref
          />  
        </div>
        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage
