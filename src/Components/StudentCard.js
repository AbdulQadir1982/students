 import React from 'react'
import Box from './Box'
function StudentCard() {
  var data =[
    {
      name:"taha",
    },
     {
      name:"zia",
    },
     {
      name:"qadir",
    },
]
  console.log(data)
  return (
  <>
    {
      data.map((val)=>(
    <div style={{height:200,width:300,backgroundColor:"red",margin:10,}}>
      <h1>{val.name}</h1>
    </div>
        
      ))
    }
  </>
  )
}

export default StudentCard
