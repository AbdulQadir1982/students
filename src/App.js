import React from 'react'
import Box from './Components/Box';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import WellCome from './Components/WellCome';
import StudentCard from './Components/StudentCard';

// const routes = createBrowserRouter([
//   {path:'/', element: <WellCome/>}, 
//    {path: '/studentcard', element: <StudentCard/>}
  
// ])

// hello
// jfdskjf
function App() {
  return (
    <div>
      {/* <header> */}
    {/* <h1>Well Come To StudentPage</h1>
    <button>Click Here</button> */}
{/* <RouterProvider router={routes}/> */}
    <StudentCard />
      {/* </header> */}
    </div>
  );
}

export default App;
