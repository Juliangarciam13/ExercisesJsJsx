import { useState } from "react";


const ShoppingCart = () => {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState("");

    const handleAddItem = (event) => {
        setCurrentItem(event.target.value);
    };

    const addToCart = () => {
        if (currentItem !== "") {
            setItems((prevItems) => [...prevItems, currentItem]);
            setCurrentItem("");
        }
    };

    return (
        <div>
            <label>Article</label>
            <input value={currentItem} onChange={handleAddItem} />
            <button onClick={addToCart}>Shop</button>
            <div>
                <ul style={{listStyle: 'none'}}>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShoppingCart;