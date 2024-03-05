import React from 'react'
import { useLocation } from 'react-router-dom'

const LoginPage = () => {
    const location =useLocation();
    console.log(location?.state?.name,'<===on redirecting');
    return (
        <div>
            <h1 className='flex justify-center items-center text-3xl py-6'>Login Please !!! by clicking the top login button !!</h1>
            <h1 className='flex justify-center items-center text-3xl py-6'>{location?.state?.name ? `${location?.state?.name}please login !!`:null }</h1>
        </div>
    )
}

export default LoginPage