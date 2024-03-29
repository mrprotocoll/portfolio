"use client"

import Loader from "@components/generic/Loader";
import { useState } from "react"
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false);

    const successMessage  = () => toast.success("Message received. I will respond shortly", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);

        if(name && email && subject && message) {
            setLoading(true)
            await fetch("https://formspree.io/f/xpzgwpqo", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((response) => {
                setLoading(false)
                if(response.ok) {
                    successMessage()
                    setEmail("")
                    setMessage("")
                    setName("")
                    setSubject("")
                    setErrorMessage("")
                }else{
                    setErrorMessage("Oops! There was a problem. Try again")
                }
            })
        }else {
            setLoading(false)
            setErrorMessage("All fields are required")
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} id="form">
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
            {loading && <Loader />}
            <div className="input-group">
                <button className="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
            </div>

            <div className={`mt-2 alert alert-danger messenger-box-contact__msg ${errorMessage ? "d-block" : "d-none"}`} role="alert">
                {errorMessage}
            </div>
        </form>
        </>
    )
}

export default Form;