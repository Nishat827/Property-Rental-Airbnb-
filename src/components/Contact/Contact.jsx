import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <div id='contact'>
            <form action='https://formspree.io/f/xdkazgwe' method='POST'>
                <span id="contacttitle">Contact Us</span>
                <div className="list">
                    <label htmlFor='name1'>UserName</label>
                    <input name='username' type='text' id='name1' required />
                </div>
                <div className="list">
                    <label htmlFor='mail'>Email</label>
                    <input name='mail' type='email' id='mail' required />
                </div>
                <div className="list">
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='message'></textarea>>
                </div>
                <button id='contactbtn'>Submit</button>
            </form>
        </div>
    )
}

export default Contact