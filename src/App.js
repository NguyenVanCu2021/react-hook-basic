import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {

  let [name, setName] = useState('Eric');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Hoi Dan IT'},
    { id: 'todo2', title: 'Doing Homework'}
    
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('address empty')
      return;
    }
   let newTodo = {id: 'abc', title: address}
   setTodos([...todos, newTodo]);
   setAddress('')
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
        <div className="todos-container">
            {
              todos.map(todo => {
                return (
                  <li className="todos-child" key={todo.id}>{todo.title}</li>
                )
              })
            }
        </div>
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)}/>
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
