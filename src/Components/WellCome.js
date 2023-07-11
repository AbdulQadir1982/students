import React from 'react'
import { useNavigate } from 'react-router-dom'




function WellCome() {
    const navigate = useNavigate()
  return (
    <>
    <div>
    <h1>Well Come To StudentPage</h1>
    <button onClick={() => navigate('/StudentCard')}>Click Here</button>
    </div>
    </>
  )
}

export default WellCome
