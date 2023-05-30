import { useState } from 'react';

const SortList = () => {
    const [list, setList] = useState([10, 5, 8, 2, 1]);

    const sortListAscending = () => {
        setList(prevList => [...prevList].sort((a, b) => a - b));
    };

    const sortListDescending = () => {
        setList(prevList => [...prevList].sort((a, b) => b - a));
    };

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={sortListAscending}>Sort Ascending</button>
            <button onClick={sortListDescending}>Sort Descending</button>
        </div>
    );
};

export default SortList;