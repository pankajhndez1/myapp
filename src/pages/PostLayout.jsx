import React from 'react'
import { Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
        <h1 className='flex justify-center items-center text-3xl py-6'>This is PostLayout</h1>
        <Outlet/>
    </div>
  )
}

export default PostLayout