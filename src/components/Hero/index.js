import React from 'react'
import './pageHero.css'
import FadeUp from '../Animations/FadeUp'

const Hero = () => {
  return (
    <div className="page-hero">
        <FadeUp>
        <div className="page-hero-content desktop-only">
            <div className="page-hero-text">
                Come and try our <div className="hero-text-image coffee-beans-image"></div> in-house
            </div>
            <div className="page-hero-text">
                Coffee <div className="hero-text-image latte-image"></div> in our cafe'.
            </div>
        </div>
        <div className="page-hero-content mobile-only">
            <div className="mobile-hero-image">
            </div>
            <div className="mobile-hero-text page-hero-text">
                Come and try our in-house<br />
                Coffee, in our cafe'.
            </div>
        </div>
        </FadeUp>
        <div className="page-hero-cta">
            <button className="btn-primary" onClick={() => window.location = "#LOCATIONS"}>See Locations</button>
        </div>
    </div>
  )
}

export default Hero