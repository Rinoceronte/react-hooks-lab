import './App.css';
import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List';

function App() {
  const [list, setList] = useState([]);

  const addTodo = (item) => {
    setList([...list, item]);
  }
  return (
    <div className="App">
        <AddTodo add={addTodo} />
        <List list={list} />
    </div>
  );
}

export default App;
