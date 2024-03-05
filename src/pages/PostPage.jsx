import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {
  const { route = 'no route' } = useParams();
  console.log(route, '<===route');
  return (
    <div>
      <h1 className='flex justify-center items-center text-3xl py-6'>This is PostPage</h1>
      <h1 className='flex justify-center items-center text-3xl py-6'>using use params i got :{route}</h1>
    </div>
  )
}

export default PostPage