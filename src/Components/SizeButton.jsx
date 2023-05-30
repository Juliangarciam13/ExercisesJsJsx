import { useState } from 'react';

const SizeButton = () => {
    const [buttonSize, setButtonSize] = useState(100);

    const handleButtonPress = () => {
        setButtonSize(prevSize => prevSize === 100 ? 150 : 100);
    };

    return (
        <div>
            <button onClick={handleButtonPress} style={{ fontSize: `${buttonSize}%` }} >
                Button
            </button>
        </div>
    );
};

export default SizeButton;
