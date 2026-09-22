import React from 'react'
import propType from 'prop-types'

const Greeting = ({name, age}) => {
  return (
    <div>
        <h1>Hello!{name}</h1>
        <p>You are {age} years old</p>
    </div>
  )
}

Greeting.propType = {
    name : propType.string.isRequired,
    age : propType.number
}

export default Greeting