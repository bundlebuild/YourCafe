import React from 'react'
import './menu.css';
import MenuItem from '../MenuItem';
import { menuCategories } from '../../data/menuCategories'
import FadeUp from '../Animations/FadeUp';

const Menu = () => {
  return (
    <div className="menu-section page-section-layout">
        <div className="menu-section-heading-container">
            <FadeUp>
                <div className="menu-section-heading heading-colour page-section-layout-heading">
                    Our Menu
                </div>
                <div className="menu-section-subheading">
                    Discover, our Tasty Drinks and Meals...
                </div>
            </FadeUp>
            <div className="menu-items-container">
                {menuCategories.map((y) => {
                    return (
                        <MenuItem data={y} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Menu