import { useState, useEffect, useRef } from 'react';
import './CardPage.css';

function CardPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [cartOpen, setCartOpen] = useState(false);
    const [helpInfo, setHelpInfo] = useState({ urgency: '', contact: '', details: '' });
    const dialogRef = useRef();

    useEffect(() => {
        document.title = 'Fresh Picks: Shop Your Favorite Fruits & Vegetables';
    }, []);

    const foodItems = [
        {
            title: 'Carrot',
            category: 'Vegetables',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1661870839207-d668a9857cb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnJvdHxlbnwwfHwwfHx8MA%3D%3D',
            description: 'An NLEA serving of baby carrots (85g, or 5 to 6 baby carrots. The following nutrition information is provided by the USDA.See below detail.',
            nutrition: [
                "Calories: 25",
                "Fat: 0g",
                "Sodium: 42mg",
                "Carbohydrates: 6g",
                "Fiber: 1.5g",
                "Sugars: 2.9g",
                "Protein: 0.5g",
                "Vitamin A: 509mcg",
                "Vitamin K: 8mcg",
            ]
        },
        {
            title: 'Celery',
            category: 'Vegetables',
            imageUrl: 'https://images.unsplash.com/photo-1610903122389-3674aafb17a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2VsZXJ5fGVufDB8fDB8fHww',
            description: 'One medium (7 1/2" to 8" long) celery stalk (40g) contains 5.6 calories, 1.2g carbohydrates, and 0.3g protein.The following nutrition information is provided by the USDA.',
            nutrition: [
                "Calories: 5.6",
                "Fat: 0.1g",
                "Sodium: 32mg",
                "Carbohydrates: 1.2g",
                "Fiber: 0.6g",
                "Sugars: 0.5g",
                "Protein: 0.3g",
                "Vitamin A: 8.8mcg",
                "Vitamin K: 11.7mcg",
            ]
        },
        {
            title: 'Broccoli',
            category: 'Vegetables',
            imageUrl: 'https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D',
            description: 'The USDA provides the following nutrition information for one cup (91g) of raw, chopped broccoli. And See below nutrition detail.',
            nutrition: [
                "Calories: 31",
                "Fat: 0.3g",
                "Sodium: 30mg",
                "Carbohydrates: 6g",
                "Fiber: 2.4g",
                "Sugars: 1.5g",
                "Protein: 2.5g",
                "Vitamin A: 81.2mcg",
                "Vitamin K: 92.8mcg",
            ]
        },
        {
            title: 'Beef',
            category: 'Meats',
            imageUrl: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZnxlbnwwfHwwfHx8MA%3D%3D',
            description: 'The following nutrition information is provided by the USDA for 3 ounces (85g) of cooked ground beef (85% lean), pan-browned, with no added fat or sodium.',
            nutrition: [
                "Calories: 218",
                "Fat: 13g",
                "Sodium: 76mg",
                "Carbohydrates: 0g",
                "Fiber: 0g",
                "Sugars: 0g",
                "Protein: 24g",
            ]
        },
        {
            title: 'Chicken',
            category: 'Meats',
            imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fHww',
            description: 'The following nutrition information is provided by the USDA for one rotisserie chicken thigh (70g), with the skin removed. See below detail.',
            nutrition: [
                "Calories: 135",
                "Fat: 7.5g",
                "Sodium: 234mg",
                "Carbohydrates: 0g",
                "Fiber: 0g",
                "Sugars: 0g",
                "Protein: 16.9g",
            ]
        },
        {
            title: 'Fish',
            category: 'Meats',
            imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
            description: '1/2 of a wild Atlantic salmon fillet (154g) contains 280 calories, 12.5g of fat, most of which is monounsaturated and polyunsaturated, 86mg sodium, 39.2g of protein.',
            nutrition: [
                "Calories: 280",
                "Fat: 12.5g",
                "Sodium: 86mg",
                "Carbohydrates: 0g",
                "Fiber: 0g",
                "Sugars: 0g",
                "Protein: 39.2g",
            ]
        },
        {
            title: 'Apple',
            category: 'Fruits',
            imageUrl: 'https://images.unsplash.com/photo-1589217157232-464b505b197f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8fDA%3D',
            description: 'One medium-sized apple (200g) provides 104 calories, 0.5 grams of protein, 27.6 grams of carbohydrates, and 0.3 grams of fat. Apples also provide fiber, potassium, and vitamin C.',
            nutrition: [
                "Calories: 104",
                "Fat: 0.3g",
                "Sodium: 2mg",
                "Carbohydrates: 27.6g",
                "Fiber: 4.8g",
                "Sugars: 20.8g",
                "Protein: 0.5g",
                "Potassium: 214mg",
                "Vitamin C: 9.2mg",
                "Vitamin A: 6mcg",
            ]
        },
        {
            title: 'Orange',
            category: 'Fruits',
            imageUrl: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww',
            description: 'One navel orange (140g) provides 73 calories, 1.3g of protein, 16.5g of carbohydrates, and 0.2g of fat. Oranges are an excellent source of vitamin C, fiber, and potassium.',
            nutrition: [
                "Calories: 73",
                "Fat: 0.2g",
                "Sodium: 13mg",
                "Carbohydrates: 16.5g",
                "Fiber: 2.8g",
                "Sugars: 12g",
                "Protein: 1.3g",
                "Vitamin C: 82.7mg",
                "Potassium: 232mg",
                "Calcium: 60.2mg",
            ]
        },
        {
            title: 'Banana',
            category: 'Fruits',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1664304188646-47b168d698aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFuYW5hfGVufDB8fDB8fHww',
            description: 'One medium-sized banana (118g) provides 105 calories, 27g of carbohydrates, 14.4g of sugars, and 1.3g of protein. Bananas are an excellent source of potassium, and one serving contains 422mg of potassium.',
            nutrition: [
                "Calories: 105",
                "Fat: 0.4g",
                "Sodium: 1.2mg",
                "Carbohydrates: 27g",
                "Fiber: 3.1g",
                "Sugars: 14.4g",
                "Protein: 1.3g",
                "Potassium: 422mg",
                "Vitamin C: 10.3mg",
                "Magnesium: 31.9mg",
            ]
        }
    ];

    const handleAddToCart = () => {
        dialogRef.current.showModal();
        setCartOpen(true);
    };

    const handleSubmitHelp = (event) => {
        event.preventDefault();
        console.log(helpInfo);  
        dialogRef.current.close();
        setCartOpen(false);
        setHelpInfo({ urgency: '', contact: '', details: '' });
        alert('Your order has been placed. Thank you for shopping with us!');
    };

    const handleInputChange = (e) => {
        setHelpInfo({ ...helpInfo, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        dialogRef.current.close();
        setCartOpen(false);
    };

    return (
        <div>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main id="main-content">
                <div className='container'>
                    <h1 className="title">Fresh Picks Market</h1>
                    <div className="category-selector">
                        <select onChange={e => setSelectedCategory(e.target.value)} value={selectedCategory}>
                            <option value="All">All</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Meats">Meats</option>
                            <option value="Fruits">Fruits</option>
                        </select>
                    </div>
                    <div className="cards">
                        {foodItems.filter(item => selectedCategory === 'All' || item.category === selectedCategory).map(item => (
                            <div key={item.title} className="card">
                                <h3 className="card-title">{item.title}</h3>
                                <img className="card__pic" alt={item.title} src={item.imageUrl} />
                                <p className="card__desc">{item.description}</p>
                                <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <dialog ref={dialogRef} className="cart-dialog">
                <form onSubmit={handleSubmitHelp}>
                    <p>Please fill out your order details:</p>
                    <label>
                        How urgent do you need these fruits?
                        <select name="urgency" value={helpInfo.urgency} onChange={handleInputChange} required>
                            <option value="">Select urgency</option>
                            <option value="Regular">Regular - It is a standard order</option>
                            <option value="Urgent">Urgent - I need it soon</option>
                            <option value="Emergency">Emergency - It is critical</option>
                        </select>
                    </label>
                    <input type="text" name="contact" placeholder="Your contact number" value={helpInfo.contact} onChange={handleInputChange} required />
                    <textarea name="details" placeholder="Additional order details" value={helpInfo.details} onChange={handleInputChange} required></textarea>
                    <div>
                        <button type="submit">Place Order</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </dialog>
            {cartOpen && <div className="modal-backdrop" onClick={handleCancel}></div>}
        </div>
    );
}

export default CardPage;

