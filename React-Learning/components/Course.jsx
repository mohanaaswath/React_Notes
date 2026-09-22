import React from 'react'

const Course = (props) => {
  return (
    <div className='box'>
        <img src={props.image} />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
    </div>
  )
}

export default Course