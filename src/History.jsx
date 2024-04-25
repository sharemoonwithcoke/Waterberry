import { useState, useEffect } from 'react';
import './History.css';

function History() {
    const initialOrders = [
        { id: 1, date: "2023-10-03", items: [
            { name: "Apple", quantity: 3, price: 1.20 },
            { name: "Banana", quantity: 6, price: 0.50 }
        ], type: "order"},
        { id: 2, date: "2023-10-04", items: [
            { name: "Orange", quantity: 2, price: 1.10 },
            { name: "Peach", quantity: 5, price: 1.50 }
        ], type: "order"}
    ];

    
    const [entries, setEntries] = useState(() => {
        const savedEntries = localStorage.getItem('historyEntries');
        const entries = savedEntries ? JSON.parse(savedEntries) : [];

        const hasOrders = entries.some(entry => entry.type === "order");
        return hasOrders ? entries : [...entries, ...initialOrders];
    });


    const [newEntry, setNewEntry] = useState('');
    const [showOrder, setShowOrder] = useState(true);

    useEffect(() => {
        localStorage.setItem('historyEntries', JSON.stringify(entries));
        console.log("Saved to localStorage:", entries);  
    }, [entries]);

    const addEntry = (event) => {
        event.preventDefault();
        if (!newEntry.trim()) return;
        const newLogEntry = {
            id: entries.length + 1,
            date: new Date().toLocaleDateString(),
            text: newEntry,
            type: "log"
        };
        setEntries([...entries, newLogEntry]);
        setNewEntry('');
    };

    const toggleView = () => {
        setShowOrder(!showOrder);
    };

    const calculateTotal = (items) => {
        return items.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2);
    };

    return (
        <div className="history-container">
            {showOrder ? (
                <div>
                    <h1>Your Order History</h1>
                    {entries.filter(entry => entry.type === "order").map(order => (
                        <div key={order.id} className="order-entry">
                            <h3>Order ID: {order.id} - Date: {order.date}</h3>
                            <ul>
                                {order.items.map((item, index) => (
                                    <li key={index}>
                                        {item.name} - {item.quantity} pcs @ ${item.price.toFixed(2)} each
                                    </li>
                                ))}
                            </ul>
                            <p><strong>Total: ${calculateTotal(order.items)}</strong></p>
                        </div>
                    ))}
                    <button onClick={toggleView}>Read more </button>
                </div>
            ) : (
                <div>
                    <h1>My Fruit Consumption Log</h1>
                    <form onSubmit={addEntry}>
                        <textarea
                            placeholder="Describe today's fruit consumption or how you felt..."
                            value={newEntry}
                            onChange={e => setNewEntry(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit">Add Entry</button>
                    </form>
                    <div className="entries">
                        {entries.filter(entry => entry.type === "log").map(entry => (
                            <div key={entry.id} className="entry">
                                <h3>{entry.date}</h3>
                                <p>{entry.text}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={toggleView}>View Orders</button>
                </div>
            )}
        </div>
    );
}

export default History;

