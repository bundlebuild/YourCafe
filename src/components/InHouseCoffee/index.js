import React from 'react'
import './inHouseCoffee.css'
import FadeUp from '../Animations/FadeUp';

const InHouseCoffee = () => {
  return (
    <div className="inhousecoffee-section page-section-layout">
        <div className="inhousecoffee-section-heading-container">
            <FadeUp className="inhousecoffee-seciton-image-container">
                <div className="inhousecoffee-section-image">
                
                </div>
            </FadeUp>
            <div>
                <div className="inhousecoffee-section-heading page-section-layout-heading">
                    New In House Coffee
                </div>
                <div className="inhousecoffee-section-content">
                    Get the Unique <i>one-of-a-kind taste</i> of YourCafe Coffee
                </div>
            </div>
            <div className="inhousecoffee-cta">
                <button className="btn btn-primary">
                    Read our Story
                </button>
            </div>
        </div>
    </div>
  )
}

export default InHouseCoffee