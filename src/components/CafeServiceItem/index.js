import React from 'react'
import './cafeServiceItem.css';
import FadeUp from '../Animations/FadeUp';

const CafeServiceItem = ({data}) => {
  return (
    <FadeUp className="cafe-service-item">
        <div className="cafe-service-item-content">
            <div className="cafe-service-item-image">
                {data.image}
            </div>
            <div className="cafe-service-item-heading">
            {data.name}
            </div>
            <div className="cafe-service-item-description">
                {data.description}
            </div>
            <div className="cafe-service-item-cta">
                <button className="btn-primary small-btn">
                    Book this 
                </button>
            </div>
        </div>
    </FadeUp>
  )
}

export default CafeServiceItem