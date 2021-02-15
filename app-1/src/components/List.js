import React from 'react';
import Todo from './Todo';

const List = (props) => {
    const arr = props.list.map((item, i) => <Todo key={i} item={item} />);
    return <>{arr}</>
}

export default List;