import { useState } from "react";

const InputController = () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange}/>
        <p>Text : {value}</p>
        </div>
    )
}

export default InputController;