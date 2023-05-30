import { useState } from "react";

const SelectedColors = () => {
    const[color,setColor] = useState('');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div>
            <select value={color} onChange={handleColorChange}>
                <option value=''>Selected Color</option>
                <option value='purple'>Purple</option>
                <option value='blue'>Blue</option>
                <option value='red'>Red</option>
            </select>
            <p style={{color}}>Selected Color: {color}</p>
        </div>
    )
}

export default SelectedColors;