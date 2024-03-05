import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
    { url: '/', text: 'Home' },
    { url: '/show-the-api-data', text: 'Api data with redux' },
    { url: '/contact', text: 'Contact' },
    { url: '/post', text: 'Post Page' },
    { url: '/post/mobile', text: 'Post Mobile Page with category' },
    { url: '/post/mobile/1', text: 'Post Mobile Page with category & id' },
    { url: `/post/mobile/1/lenovo`, text: 'Post Mobile Page with query params' },
    { url: `/login`, text: 'Login' },
    { url: `/dashboard`, text: 'Dashboard' },
    { url: `/post-layout`, text: 'Post Layout' },
    { url: `/nested-routing/route1`, text: 'See Nested Routing' },
];

const Navbar = ({ handleLogin, isLoggedIn }) => {
    return (
        <div>
            <button onClick={handleLogin}>{isLoggedIn ? "logout" : "login"}</button>
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
