import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PokemonList = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const offset = page*10 - 10;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10 - 10}`).then(res => setList(res.data.results))
      }, [page]);



      return (
          <>
            {list.map((p, i) => {
                return <Link to={`/pokemon/${p.name}`} key={i}>
                    <h2>{p.name}</h2>
                </Link>
            })}
            <button onClick={() => setPage(page-1)} disabled={page < 2}>Previous</button><button onClick={() => setPage(page + 1)}>Next</button> 
          </>
      )
}

export default PokemonList;