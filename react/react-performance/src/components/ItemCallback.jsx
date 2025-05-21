import React, { useState, useCallback } from 'react'

const ItemCallback = () => {
    const [items, setItems] = useState([
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
    ])

    const removeItem = useCallback((itemToRemove) => {
        console.log("[removeItem] recreated...")
        const filteredItems = items.filter((item) => item !== itemToRemove)
        setItems(filteredItems);
    }, []);

    return (
        <div>
            {items.map((item, i) => (
                <>
                    <div key={i}>
                        {item}
                        <button onClick={() => removeItem(item)}>X</button>
                    </div>
                </>
            ))}
        </div>
    )
}

export default ItemCallback
