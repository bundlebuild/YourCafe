import React from 'react'
import './aboutUs.css';
import FadeUp from '../Animations/FadeUp'

const AboutUs = () => {
  return (
    <div className="about-us" id="#ABOUTUS">
        <div className="about-us-image"></div>
        <div className="page-section-layout about-us-layout">
            <div className="about-us-layout-content page-layout-content">
                
            <div class="page-hero-content">
            <div className="page-section-layout-heading about-us-layout-heading">
                About Us
            </div>

            <div class="page-hero-text desktop-only">An in-house, cat cafe <div class="hero-text-image cat-image"></div>, located </div><div class="page-hero-text desktop-only"><div class="hero-text-image whitefield-image"></div> in Whitefield, Benglauru.</div></div>
            </div>
            <div class="about-mobile-hero-text page-hero-text mobile-only">An in-house, cat cafe<br />located, in Whitefield Benglauru.</div>
        </div>
    </div>
  )
}

export default AboutUs