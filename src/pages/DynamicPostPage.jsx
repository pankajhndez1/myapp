import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicPostPage = () => {
    const { category } = useParams()
    return (
        <div>
            <h2  className='flex justify-center items-center text-3xl py-6'>Post's {category}</h2>
        </div>
    )
}

export default DynamicPostPage