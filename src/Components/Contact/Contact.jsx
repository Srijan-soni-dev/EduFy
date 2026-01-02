import React from 'react'
import { useState } from 'react'
import './Contact.css'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4ad3f4ac-c5af-44d3-b26b-daa314086fa7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    event.target.reset();
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message</h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

          <ul>
            <li> <img src={mail_icon} alt="" />Contact@Srijan-soni-dev</li>
            <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />
              MA 02139, United States</li>
              
          </ul>
        
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter Your Name' required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter Your Phone Number' required />


          <label>Your Email</label>
          <input type="email" name="email" placeholder='Enter Your Email' required />

          
          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>

          <button className='btn dark-btn' type="submit">Send Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
