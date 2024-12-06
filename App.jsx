// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import Student from './Student';
import logo from './abeslogo.png';
import ImageManipulation from './ImageManipulation';


import Registration from './Registration';
function App() {
  
  const[sharedata,setShareData]=useState();

  // let a = 20;
  // let mystyle = {
  //   backgroundColor: 'yellow',
  //   color: 'red',
  //   border: '2px solid red',
  //   height: '100px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // };
 
// const StudentData ={
//   college:"ABES ENGINEERING COLLEGE",
//   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//   name:"Priya Yadav" , 
//   roll:"2022153",
//   branch:"CSE_AIML",
//   section:"B"
// }
//   return ( 
//   <div style={{marginLeft:"600px"}}>
//     <Student data={StudentData}/>
//   </div>
    
//     // <div style={{ color: "red" }}>
//     //   <h2>ABES Engineering College</h2>
//     //   <div style={mystyle}>{a}</div>
//     // </div>
//     // <div style={{marginLeft:"600px"}}>
//     //   <Student 
//     //   pic={<img src={logo} height='150' width='150'/>}college='ABES ENGINEERING COLLEGE' roll='220032153' name= "Priya" branch="CSE_AIML" section="B"/>
//     // <Student 
//     //   pic={<img src={logo} height='150' width='150'/>}college='ABES ENGINEERING COLLEGE' roll='220032154' name= "Riya" branch="CSE_AIML" section="B"/>
//     // <Student 
//     //   pic={<img src={logo} height='150' width='150'/>} roll='220032155' name= "Siya" branch="CSE_AIML" section="B"/>
   
//     // </div>
   
//   );

return(
  
<Registration />


)
}

export default App;