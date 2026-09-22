import React from 'react'

const users = [
    {id:1 , name:"mohan" , age:20},
    {id:2 , name:"mythilirupa" , age:20},
    {id:3 , name:"lover" , age:20}
    
]

const List = () => {

  return (
    <div>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                     {user.name} is {user.age} years old
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List


/*
mohan is 20 years old
mythilirupa is 20 years old
lover is 20 years old
*/