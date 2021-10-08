import { useState } from 'react'
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            //Set Parameters for emailJS
            const serviceId = '';
            const templateId = '';
            const userId = '';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    // const isValidEmail = email => {
    //     const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regex.test(String(email).toLowerCase());
    // };

    return (
        <div id="contact-form" className="md:px-80 grid grid-cols-2 container mx-auto flex-wrap p-5 flex-col md:flex-row items-right justify-center md:justify-center">
            <input className="mb-20" type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input className="mb-20" type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)}/>
            <textarea className="col-span-2 pb-10 mb-5" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button className="col-span-2" onClick={submit}>Send Message</button>
            <span className="col-span-2 justify-center text-center" className={emailSent ? 'visible' : 'hidden'}>Thank you for your message, we will be in touch in no time!</span>
        </div>
    )
}
