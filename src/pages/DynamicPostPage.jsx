import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicPostPage = () => {
    const { category } = useParams()
    return (
        <div>
            <h2>Post's {category}</h2>
        </div>
    )
}

export default DynamicPostPage