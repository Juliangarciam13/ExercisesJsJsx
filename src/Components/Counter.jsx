import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    if (count < 0) {
        setCount(0)
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default Counter;