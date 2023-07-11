import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import WellCome from './Components/WellCome';
import StudentCard from './Components/StudentCard';

const routes = createBrowserRouter([
  {path:'/', element: <WellCome/>}, 
   {path: '/studentcard', element: <StudentCard/>}
  
])



function App() {
  return (
    <div className="App">
      <header className="App-header">
    {/* <h1>Well Come To StudentPage</h1>
    <button>Click Here</button> */}

<RouterProvider router={routes}/>
    
      </header>
    </div>
  );
}

export default App;
