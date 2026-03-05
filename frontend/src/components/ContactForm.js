import {useEffect, useState} from "react";
import '../css/Contact.css'
import emailjs from '@emailjs/browser';
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState("");
    const submitContact = async () => {
        try{
            await  emailjs.send('YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',{
                    from_name: name,
                    from_email: email,
                    phone_number: phonenumber,
                    message: message,
                },
                'YOUR_PUBLIC_KEY'
            );
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Failed to send:', error);
            alert('Failed to send message. Please try again.');
        }
        };

    return (
        <div className="contact-container">
            <h3 className="contact-title">Contact Us</h3>

            <form>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Phone Number:</label>
                    <input type="tel" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label className="form-label" >Message:</label>
                    <textarea  type="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                </div>
                <button type="button" className="contact-submit" onClick={submitContact}>Submit</button>
            </form>
        </div>
);
}
export default ContactForm;