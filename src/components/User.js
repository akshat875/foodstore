import React from 'react'

const User = ({name}) => {
  return (
    <div className='user-card'>
        <li>{name}</li>
        <li>@learning</li>
    </div>
  )
}

export default User;