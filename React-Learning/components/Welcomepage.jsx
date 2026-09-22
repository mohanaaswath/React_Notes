import React, { useContext } from 'react'
import { userContext } from '../components/userContext'
const Welcomepage = () => {
    const {user} = useContext(userContext)
  return (
    <div>
        <h1>Welcome user:</h1>
        <p>name : {user.name} id:{user.id}</p>
    </div>
  )
}

export default Welcomepage