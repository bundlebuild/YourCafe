import React from 'react'
import './contactNumberItem.css';

const ContactNumberItem = ({numberFor, number}) => {
  return (
    <div className="contact-number-item">
        <div className="number-for">
            <span>
                {numberFor}
            </span>
        </div>
        <div className="contact-number-label">
            +94{number}
        </div>
    </div>
  )
}

export default ContactNumberItem