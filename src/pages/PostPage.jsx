import React from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {
  const { route='no route' } = useParams();
  console.log(route,'<===route');
  return (
    <div>
      <h1>This is PostPage</h1>
      <h1>using use params i got :{route}</h1>
    </div>
  )
}

export default PostPage