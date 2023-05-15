import React from 'react'
import './locationItem.css';

const LocationItem = () => {
  return (
    <div className="location-item-card">
        <div className="location-item-heading">
            Whitefield
        </div>
        <div className="location-item-address">
            Somewhere very exciting, Whitefield, Bangalore, 00000
        </div>
        <div className="location-section-cta">
            <button className="btn btn-primary small-btn">Visit Map</button>
        </div>
    </div>
  )
}

export default LocationItem