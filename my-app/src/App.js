import './App.css';
import CounterHooks from './CounterHooks';
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('red');

  let changeTheme = () =>{
    setTheme((prevTheme) =>{
      return prevTheme === 'red' ? 'blue' : 'red';
    });
  }


  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
    <div className="App">
      <h1>Project One</h1>
      <hr/>
      <button onClick={changeTheme}>Toogle theme</button>
      <CounterHooks title = {'Counter project'}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
