import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const DynamicPostPageWithId = () => {
    const { category, id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <h2  className='flex justify-center items-center text-3xl py-6'>Post's with category {category} and id {id}</h2>
        </div>
    )
}

export default DynamicPostPageWithId