import React from 'react'
import "tailwindcss";
const Map = () => {
 
    const StudentDetails = [
      {name:"mohan" , dep: "BSC.CS" , year:"3rd year" , domain:"front-web application developer"},
      {name:"nithin" , dep: "BCA" , year:"3rd year" , domain:"video-editor"},
      {name:"abisheak" , dep: "BSC.CS" , year:"3rd year" , domain:"front-web application developer"},
      {name:"mythili" , dep: "B.COM" , year:"3rd year" , domain:"excel"}
    ]

  return (
    <div>
        <ol>
            {StudentDetails.map(student => (
                <li>{student.name} - {student.dep} - {student.year} - {student.domain}</li>
            ))}
        </ol>
    </div>
  )
}

export default Map