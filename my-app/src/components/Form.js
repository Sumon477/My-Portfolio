import "./Form.css";
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b127hqc', 'template_ivro4k8', form.current, 'gdGyoUpbZVqW336eu')
      .then(
        (result) => {
          console.log(result.text);
          console.log("messege sent");
      }, 
        (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <div className="contact">
              <h1>CONTACT</h1>
            </div>
            <div className="form">
             <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input className="btn" type="submit" value="Submit" />
             </form>
            </div>
        </div>
    )
}
