import React from 'react'
import './menuItem.css';

const MenuItem = ({data}) => {
  return (
    <div className="menu-item">
        <div className="menu-item-image">
            <img src={data.image} />
        </div>
        <div className="menu-item-content">
            <div className="menu-item-heading">
                {data.name}
            </div>
            <div className="menu-item-price">
                <span className="rupee">{data.price}</span>
            </div>
        </div>
    </div>
  )
}

export default MenuItem