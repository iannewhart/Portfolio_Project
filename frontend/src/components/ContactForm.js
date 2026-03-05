import {useEffect, useState} from "react";
import '../css/Contact.css'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState("");
    return (
        <div className="contact-container">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea  type="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                </div>
                <button type="button" className="contact-submit">Submit</button>
            </form>
        </div>
);
}
export default ContactForm;