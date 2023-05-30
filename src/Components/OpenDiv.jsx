import { useState } from 'react';

const OpenDiv = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDiv = () => {
        setIsOpen(true);
    };

    const closeDiv = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openDiv}>Open Div</button>
            {isOpen && (
                <div>
                    <h2>HELLO</h2>
                    <button onClick={closeDiv}>Close Div</button>
                </div>
            )}
        </div>
    );
};

export default OpenDiv;