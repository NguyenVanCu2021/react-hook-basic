import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/CountDown';

function App() {

  let [name, setName] = useState('Eric');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Hoi Dan IT', type: 'eric'},
    { id: 'todo2', title: 'Doing homework', type: 'eric'},
    { id: 'todo3', title: 'Playing game', type: 'PG'},
    { id: 'todo4', title: 'Reading book', type: 'RB'}
    
  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('address empty')
      return;
    }
   let newTodo = {id: Math.floor(Math.random() * 1000), title: address, type: 'TT'}
   setTodos([...todos, newTodo]);
   setAddress('')
  }

  const handleOnChangeInput = (e) => {
    setAddress(e.target.value)
    // console.log(e.target.value)
  }

  const handleDelete = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
  }

  const onTimesup = () => {
    // alert("Times up")
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountDown  onTimesup = {onTimesup}/>
        <span>-------------------------------</span>
        <NewCountDown />
        <h1>Hello world {name}</h1>
        <Covid />
        {/* <Todo 
          myData={todos}
          title={'All todos'}
          handleDeleteData={handleDelete}
        />
        <Todo 
          myData={todos.filter(item => item.type === 'eric')}
          title={'Eric todos'} 
          handleDeleteData={handleDelete}
        />
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)}/>
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
