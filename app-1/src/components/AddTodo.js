import React, {useState} from 'react';

const AddTodo = (props) => {
    const [input, setInput] = useState('');
    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder='Add Task' />
            <button onClick={() => {props.add(input); setInput(''); }}>Submit</button>
        </div>
    )
}

export default AddTodo;