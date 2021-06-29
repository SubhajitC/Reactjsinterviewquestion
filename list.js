import React from 'react';
import ReactDOM from 'react-dom';

const words = ['sky', 'blue', 'falcon', 'wood', 'cloud'];
const items = words.map((word, idx) => {
    return <li key={idx}>{word}</li>;
});

console.log(items);

ReactDOM.render(
    <ul> {items} </ul>,
    document.getElementById('root')
);