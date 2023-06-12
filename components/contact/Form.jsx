"use client"

import { useState } from "react"

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(name && email && subject && message) {
            await fetch("https://formsubmit.co/mrprotocoll@yahoo.com", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
                })
            })
            setEmail("")
            setMessage("")
            setName("")
            setSubject("")
            setErrorMessage("")
        }else {
            setErrorMessage("All fields are required")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" name="full-name" id="full-name" placeholder="Name *" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="input-group">
                <input type="email" name="email" id="email" placeholder="Email *" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="input-group">
                <input type="text" name="subject" id="subject" placeholder="Your Subject *" onChange={(e) => setSubject(e.target.value)} value={subject} />
            </div>
            <div className="input-group">
                <textarea name="message" id="message" placeholder="Your Message *" onChange={(e) => setMessage(e.target.value)} value={message} ></textarea>
            </div>
           
            <div className="input-group">
                <button className="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
            </div>

            <div className={`mt-2 alert alert-danger messenger-box-contact__msg ${errorMessage ? "d-block" : "d-none"}`} role="alert">
                {errorMessage}
            </div>
        </form>
    )
}

export default Form;