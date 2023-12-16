import React from 'react'

export default function Demo()
{
    const college=[{id:1,studentName:"Dhanu",age:19},
                    {id:2,studentName:"Bala",age:20},
                    {id:3,studentName:"Divya",age:19},]
    const display=college.map((col)=><li Key={col.id}> {col.StudentName} {col.age} </li>)

    return (
      <div style={{backgroundColor:"blue"}}>
        <h1>List of Students</h1>
        {display}
      </div>
    )
  
}
