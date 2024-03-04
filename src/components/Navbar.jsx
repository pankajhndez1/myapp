import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
    { url: '/', text: 'Home' },
    { url: '/show-the-api-data', text: 'Api data with redux' },
    { url: '/contact', text: 'Contact' },
    { url: '/post', text: 'Post Page' },
    { url: '/post/mobile', text: 'Post Mobile Page' },
];

const Navbar = () => {
    return (
        <div>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.url} style={({ isActive }) => {
                            return { backgroundColor: isActive ? "red" : '' }
                        }}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
