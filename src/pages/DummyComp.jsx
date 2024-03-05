import React from 'react'
import MyNewEnhanceComp from './NestedHoc'

const DummyComp = ({ text, age, data }) => {
    console.log(text, age, data, '<===text, age, data');
    return (
        <div className='flex flex-col justify-center items-center space-y-10 mt-5'>
            <p className='text-2xl font-semibold'>MyNewEnhanceComp Hoc Component used</p>
            <p className='text-2xl font-semibold'>Really important in good projects !!!</p>
            <p className='text-2xl font-semibold'>{text}</p>
            <p className='text-2xl font-semibold'>{data}</p>
            <p className='text-2xl font-semibold'>{age}</p>
        </div>
    )
}

export default MyNewEnhanceComp(DummyComp)