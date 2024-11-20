import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const cookie_se_aya_hua_userId = Cookies.get('user_id');
        console.log("cookie_se_aya_hua_userId: ",cookie_se_aya_hua_userId);
        
        const fetchCart = async()=>{
            await fetch('http://localhost:5000/allcartitems',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({user_id: cookie_se_aya_hua_userId})
            })
            .then((res)=>res.json())
            .then((data) => {
                console.log(data);
                setList(data.items);
            })
        };

        fetchCart();

    }, [])

    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate the total amount
    const calculateTotalAmount = () => {
        let total = 0;
        list.forEach(order => {
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
    }, [list]);

    return (
        <div style={{backgroundColor:'#dfd3c3', boxSizing:'border-box'}}>

            <Navbar />
            <div className="checkout-page" style={{position:'absolute', top:'12vh', left:'0vw', boxSizing:'border-box', overflowY:'hidden', height:'88vh', display:'flex', alignItems:'center'}}>

                <div className="order-summary" style={{boxSizing:'border-box', padding:'2vh 2vw', maxHeight:'70vh', overflowY:'scroll', backgroundColor:'#c7b198'}}>
                    <h2 style={{marginBottom:'1vh'}}>Order Summary</h2>
                    <ul className="order-list" style={{padding:'3vh 2vw', marginBottom:'3vh'}}>
                        {list.map(item => (
                            <li key={item.id} className="order-item">
                                <span className="order-name" style={{width:'50%'}}>{item.title}</span>
                                <span className="order-quantity">x{item.quantity}</span>
                                <span className="order-price">${item.price * item.quantity}</span>
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

                <div className="payment-section" style={{width:'35%', boxSizing:'border-box', padding:'2vh 1vw', maxHeight:'55vh', backgroundColor:'#596e79', color: 'white'}}>
                    <h2 style={{textAlign:'center'}}>Payment</h2>
                    <div className="payment-method" style={{display:'flex', flexDirection:'column', gap:'2vh', marginTop:'5vh', marginBottom:'3vh'}}>
                        <h4>Select Payment</h4>
                        <label>
                            <input
                                type="radio"
                                name="payment-method"
                                value="Credit Card"
                                checked={paymentMethod === 'Credit Card'}
                                onChange={handlePaymentMethodChange}
                                style={{marginRight:'1vw'}}
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
                                style={{marginRight:'1vw'}}
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
                                style={{marginRight:'1vw'}}
                            />
                            Cash on Delivery
                        </label>
                    </div>

                    <button className="place-order-btn" style={{width:'100%', padding:'2vh 1vw', marginBottom:'2vh', backgroundColor:'#42b883', border:'none', outline:'none', color:'white', cursor:'pointer', fontSize:'1.3vw'}} onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                    <button style={{width:'100%', padding:'2vh 1vw', backgroundColor:'#ef5a5a', border:'none', outline:'none', color:'white', cursor:'pointer', fontSize:'1.3vw'}} className="place-order-btn">
                         Go Back to Cart
                    </button>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};
