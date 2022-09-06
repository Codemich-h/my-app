import {React, useState} from 'react';
import List from './components/List';
import './App.css';



export default function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  return (
    <div className="main">
      <h1>Simple Search App</h1>
      <div className='search-box'>
        <input id='input-field' onChange={inputHandler} className='search'/><br />
      </div>
      <List input={inputText}/>
    </div>

  );
}



