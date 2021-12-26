import React from 'react';
import logo from './logo.svg';
import './App.css';
const version = require('@xyz/shared');
console.log(version.default);
function App() {
  return (
    <div >

      {version.default}

    </div>
  );
}

export default App;
