import { useState } from "react";

const OptionsSelector = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleChange} >
                <option value=''>Selected One Option</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </select>
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

export default OptionsSelector;