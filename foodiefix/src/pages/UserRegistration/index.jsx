import React from 'react'
import "./index.css"

const UserRegistration = () => {
  return (
    <div className="ring">
    <i style={{ "--clr": "#00ff0a" }}></i>
    <i style={{ "--clr": "#ff0057" }}></i>
    <i style={{ "--clr": "#fffd44" }}></i>
    <div className="login">
      <h2>Register</h2>
      <div className="inputBx">
        <input type="text" placeholder="Firstname" />
      </div>
      <div className="inputBx">
        <input type="text" placeholder="Lastname" />
      </div>
      <div className="inputBx">
        <input type="text" placeholder="Email" />
      </div>
      <div className="inputBx">
        <input type="password" placeholder="Password" />
      </div>
      <div className="inputBx">
        <input type="password" placeholder="Confirm Password" />
      </div>
      <div className="inputBx">
        <input type="submit" value="Register" />
      </div>
      <div className="links">
        <a href="#">Forget Password</a>
        <a href="#">Register</a>
      </div>
    </div>
  </div>
  )
}

export default UserRegistration;