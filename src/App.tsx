import './App.css';

import React, { useEffect } from 'react';

import exampleFunction from './functions';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    // NOTE: The docstring does not show up when using object destructuring.
    const { string1, string2 } = exampleFunction({
      string1: "Hello",
      string2: "world",
    });
    console.log(string1);
    console.log(string2);
    // NOTE: The return object docstring doesn't show up here.
    const returnObject = exampleFunction({
      string1: "Hello",
      string2: "world",
    });
    // NOTE: When accessing attributes the docstring shows up.
    console.log(returnObject.string1);
    console.log(returnObject.string2);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>O no return types are not shown in vscode.</p>
      </header>
    </div>
  );
}

export default App;
