import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let price = 0;
    for (let i = 0; i< cart.length; i++){
        const coursePrice = cart[i];
        price = price + coursePrice.price;
    }
    return (
        <div className="cart">
            <h4>Enrollment Summary</h4>
            <p>Courses Enrolled: {cart.length}</p>
            <p>Total Price: {price} taka</p>
        </div>
    );
};

export default Cart;