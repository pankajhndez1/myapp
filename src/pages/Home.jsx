import React from 'react'
import AddBgToAllThePages from './HocComp';

const Home = ({ permissions,classNames }) => {
  return (
    <div className={classNames}>
      <h1 className='flex justify-center items-center text-3xl py-6'>Home Component</h1>
      <h1>{permissions ? "Permissions are coming from Hoc" : "No permissions"}</h1>
    </div>
  )
}

export default AddBgToAllThePages(Home);