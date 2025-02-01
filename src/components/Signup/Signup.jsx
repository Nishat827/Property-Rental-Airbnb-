import React from 'react'
import "./Signup.css"
import { MdOutlinePersonAddAlt } from "react-icons/md";

const Signup = () => {
  return (
    <div id='signup' onSubmit={(e)=>{
        alert("SignUp Successfully...👍")  
      }}>
         <form action=''>
                <span id="signuptitle">Sign Up Page</span>
                <div className="list">
                    <label htmlFor='name'>Username</label>
                    <input type='text' id='name' required />
                </div>
                <div className="list">
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' required />
                </div>
                <div className="list">
                    <label htmlFor='password1'>Password</label>
                    <input type='password' id='password1' required/>
                </div>
                <div className="list">
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password' id='password2' required/>
                </div>
                <button id='signupbtn'>SignUp <MdOutlinePersonAddAlt />
                </button>
            </form>
    </div>
  )
}

export default Signup