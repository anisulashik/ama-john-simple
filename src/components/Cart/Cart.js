import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    console.log(props)
    let totalQunatity = 0;
    let total = 0;
    
    for(const product of cart){
        // console.log(product)
        if(!product.quantity){
            product.quantity=1;
        }
        total= total+product.price*product.quantity;
        totalQunatity = totalQunatity + product.quantity;
    }
    const shipping =15;
    // const total = cart.reduce((previous,product)=> previous+product.price,0)
    const tax =total*.15
    const grandTotal = tax+total+shipping;
    return (
        <div>
            <h3>Items Ordered: {totalQunatity} </h3>
            <h4>Total:{total.toFixed(2)}</h4>
            <p>shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
            <p>{props.children}</p>
        </div>
    );
};

export default Cart;