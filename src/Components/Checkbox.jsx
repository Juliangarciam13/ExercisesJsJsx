import { useState } from "react";

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                {isChecked ? 'Selected' : 'No Selected'}
            </label>
        </div>
    )
}

export default Checkbox;