import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const DynamicPostPageWithSearchParams = () => {
    const { category, id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams, '<====searchParams');

    return (
        <div>
            <h2 className='flex justify-center items-center text-3xl py-6'>Post's with category {category} and id {id}</h2>
            <h2 className='flex justify-center items-center text-3xl py-6'>{searchParams.get("item") && <p>The searched params are :</p>}</h2>
            <h3 className='flex justify-center items-center text-3xl py-6'>{searchParams.get("item")}</h3>
            <h3 className='flex justify-center items-center text-3xl py-6'>{searchParams.get("price")}</h3>
            <h1 className='flex justify-center items-center text-3xl py-6'>Note :give query params like (?item=car&price=2323) in order to see the effect !!</h1>
        </div>
    )
}

export default DynamicPostPageWithSearchParams