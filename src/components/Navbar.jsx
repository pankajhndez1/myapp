import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
    {url:"/dummy",text:"Nested Hoc example"},
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
        <div >
            <div className='text-2xl rounded-md px-3 py-3 font-semibold hover:font-medium  flex justify-between '>
                <p className='text-lg font-semibold hover:text-gray-500'>Logo</p>
                <button onClick={handleLogin} className='hover:text-gray-500'>{isLoggedIn ? "logout" : "login"}</button>
            </div>
            <ul className="flex space-x-4">
                {navLinks.map((link, index) => (
                    <li key={index} className='border rounded-lg bg-gray-400 border-gray-500 flex text-center hover:text-white items-center px-3 py-1'>
                        <NavLink to={link.url} style={({ isActive }) => {
                            return { color: isActive ? "blue" : 'white' }
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
