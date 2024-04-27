import './App.css';
import React,{useEffect,useState} from 'react';
import { fetchdata } from './api';
function App() {
  const [data,setdata]=useState("");
  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice').then(response=>response.json()).then(data=>console.log(data.slip.advice))
  })
  return (
    <div className="App">
      <div className='card'>
<header>Hello</header>
      </div>

    </div>
   
  );
}

export default App;
