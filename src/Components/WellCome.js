import React from 'react'
import { useNavigate } from 'react-router-dom'




function WellCome() {
    const navigate = useNavigate()
  return (
    <>
    <div className='App'>
    <div style={{marginLeft:700}}>
      <button style={{margin:5,fontSize:20}}>student details</button>
      <button style={{margin:5,fontSize:20}}>Calendar</button>
      <button style={{margin:5,fontSize:20}}>Calendar</button>
      <button style={{margin:5,fontSize:20}}>Calendar</button>
      </div>

    
      
    <h1 style={{color:'#FFA500',marginTop:200}}>Well Come To Ayan Tech</h1>
    
    <button style={{fontSize:40,borderRadius:10,color:'red',}}
     onClick={() => navigate('/StudentCard')}>Click Here</button>
   
    </div>
    </>
  )
}

export default WellCome
