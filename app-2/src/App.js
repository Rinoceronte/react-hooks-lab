import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=140').then(res => setList(res.data.results))
  }, [])
  return (
    <div className="App">
        {list.map((el, i) => <Pokemon name={el.name} key={i} />)}
    </div>
  );
}

export default App;
