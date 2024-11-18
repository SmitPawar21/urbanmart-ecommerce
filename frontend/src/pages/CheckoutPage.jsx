import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const CheckoutPage = () => {
    // Sample order data
    const orders = [
        { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
        { id: 3, name: 'Product 3', price: 19.99, quantity: 3 },
    ];

    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate the total amount
    const calculateTotalAmount = () => {
        let total = 0;
        orders.forEach(order => {
            total += order.price * order.quantity;
        });
        setTotalAmount(total);
    };

    // Handle payment method change
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    // Trigger place order action
    const handlePlaceOrder = () => {
        alert(`Order placed successfully with payment via ${paymentMethod}!`);
    };

    // Recalculate total when component mounts or orders change
    React.useEffect(() => {
        calculateTotalAmount();
    }, [orders]);

    return (
        <div style={{backgroundColor:'#dfd3c3'}}>

            <div className="checkout-page">
                <Navbar />

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <ul className="order-list">
                        {orders.map(order => (
                            <li key={order.id} className="order-item">
                                <span className="order-name">{order.name}</span>
                                <span className="order-quantity">x{order.quantity}</span>
                                <span className="order-price">${order.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="total-summary">
                        <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    </div>
                    <div style={{marginTop:'3vh'}}>
                        <h5>Order placing at this address:</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, voluptates</p>
                    </div>
                </div>

                <div className="payment-section">
                    <h2>Payment</h2>
                    <div className="payment-method">
                        <label>
                            <input
                                type="radio"
                                name="payment-method"
                                value="Credit Card"
                                checked={paymentMethod === 'Credit Card'}
                                onChange={handlePaymentMethodChange}
                            />
                            Credit Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="payment-method"
                                value="PayPal"
                                checked={paymentMethod === 'PayPal'}
                                onChange={handlePaymentMethodChange}
                            />
                            PayPal
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="payment-method"
                                value="Cash on Delivery"
                                checked={paymentMethod === 'Cash on Delivery'}
                                onChange={handlePaymentMethodChange}
                            />
                            Cash on Delivery
                        </label>
                    </div>

                    <button className="place-order-btn" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                    <button style={{backgroundColor:'red'}} className="place-order-btn">
                         Go Back to Cart
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};
