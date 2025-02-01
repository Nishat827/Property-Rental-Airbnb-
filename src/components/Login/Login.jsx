import React from 'react'
import "./Login.css"
import { MdLogin } from "react-icons/md";

const Login = () => {
    return (
        <div id='login'
        onSubmit={(e)=>{
            alert("Login Sucessfully...👍")
        }}>
            <form action=''>
                <span id="logintitle">Login Page</span>
                <div className="list">
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' required />
                </div>
                <div className="list">
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required/>
                </div>
                <button id='loginbtn'>Login<MdLogin /></button>
            </form>
        </div>
    )
}

export default Login