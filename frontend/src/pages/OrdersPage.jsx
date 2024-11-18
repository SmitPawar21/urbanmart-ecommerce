import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// Sample data for orders
const orders = [
    {
        title: "Product A",
        expectedDelivery: "2024-11-20",
        quantity: 2,
        orderStatus: "Order Placed"
    },
    {
        title: "Product B",
        expectedDelivery: "2024-11-22",
        quantity: 5,
        orderStatus: "Order Placed"
    },
    {
        title: "Product C",
        expectedDelivery: "2024-11-25",
        quantity: 1,
        orderStatus: "Order Placed"
    }
];

export const OrdersPage = () => {
    return (
        <div style={{backgroundColor:'#dfd3c3'}}>
            <div style={{boxSizing:'border-box', backgroundColor:'#dfd3c3', width:'100%', height:'90vh', display:'flex', justifyContent:'space-around', alignItems:'center', position:'absolute', top:'12vh'}}>
                <Navbar/>
                <div className="order-list">
                    <h1> Your placed Orders </h1>
                    {orders.map((order, index) => (
                        <div className="order-item" key={index}>
                            <div className="order-details">
                                <h3>{order.title}</h3>
                                <p><strong>Expected Delivery:</strong> {order.expectedDelivery}</p>
                                <p><strong>Quantity:</strong> {order.quantity}</p>
                            </div>
                            <div className="order-status">
                                <span className="order-tag">{order.orderStatus}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='advertisement'>
                    
                </div>
            </div>
        </div>

    );
};
