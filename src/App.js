import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {

  let [name, setName] = useState('Eric')
  const [address, setAddress] = useState('')

  const handleEventClick = (event) => {
    setName('Hoi Dan IT')
    console.log('>>> click me', name)
  }

  const handleOnChangeInput = (e) => {
    setAddress(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world {name}</h1>
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)}/>
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
