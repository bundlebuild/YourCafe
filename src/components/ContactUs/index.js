import React from 'react'
import './contactUs.css';
import LocationItem from '../LocationItem';
import ContactNumbersSection from '../ContactNumbersSection';

const ContactUs = () => {
  return (
    <div className="page-section-layout">
        <div className="menu-section-heading-container">
            <div>
                <div className="menu-section-heading page-section-layout-heading">
                    We wanna meet you now...
                </div>
                <div className="menu-section-subheading">
                    Come to our Whitefield Cafe, and eat drink tasty cat coffee.
                </div>
            </div>
            <div className="contact-container">
                <LocationItem />
                <ContactNumbersSection />
            </div>
        </div>
    </div>
  )
}

export default ContactUs