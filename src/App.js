import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchdata } from './api';

function App() {
  const [data, setdata] = useState("");

  useEffect(() => {
    const fetchDataAndSetAdvice = async () => {
      const advice = await fetchdata();
      setdata(advice);
    };

    fetchDataAndSetAdvice();
  }, []);

  const handleButtonClick = async () => {
    const advice = await fetchdata();
    setdata(advice);
  };

  return (
    <div className="App">
      <div className='card'>
        <p>{data}</p>
        <button className='button' onClick={handleButtonClick}>Give Me Advice!</button>
      </div>
    </div>
  );
}

export default App;
