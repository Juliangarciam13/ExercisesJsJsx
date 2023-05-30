import { useState } from "react";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? 'Off' : 'On'}
            </button>
        </div>
    )
}

export default Toggle;