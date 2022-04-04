import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {

    const [nav, setNav] = useState(false)

    const navHandler = () => {
        setNav(!nav)
    }

    return (
        <nav className={nav ? 'main_nav active': 'main_nav'}>
            <div className="container">
                <ul>
                    <li className="nav_items">
                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'nav_links active' : 'nav_links'}
                        > home </NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/review'
                            className={({ isActive }) => isActive ? 'nav_links active' : 'nav_links'}
                        > review </NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/dashboard'
                            className={({ isActive }) => isActive ? 'nav_links active' : 'nav_links'}
                        > dashboard </NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/blogs'
                            className={({ isActive }) => isActive ? 'nav_links active' : 'nav_links'}
                        > blogs  </NavLink>
                    </li>
                    <li className="nav_items">
                        <NavLink to='/about'
                            className={({ isActive }) => isActive ? 'nav_links active' : 'nav_links'}
                        > about </NavLink>
                    </li>
                </ul>
                <div className="dots" onClick={navHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


        </nav>
    );
};

export default Header;