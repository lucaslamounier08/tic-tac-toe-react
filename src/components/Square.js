import { useState } from 'react';

export default function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue(value === 'X' ? 'O' : 'X');
        console.log('handleClick: ' + value);
    }

    return <button className="square" onClick={handleClick}>{value}</button>;
}