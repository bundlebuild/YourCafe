import React from 'react'
import ContactNumberItem from '../ContactNumberItem'
import './contactNumbersSection.css';
import WhatsappContactButton from '../WhatsappContactButton';

const ContactNumbersSection = () => {
  return (
    <div className="contact-numbers-section">
        <ContactNumberItem numberFor="Contact Us" number={"0000000000"} />
        <ContactNumberItem numberFor="Veneue Booking" number={"0000000000"} />
        <ContactNumberItem numberFor="Whatsapp" number={"0000000000"} />
        <WhatsappContactButton />
    </div>
  )
}

export default ContactNumbersSection