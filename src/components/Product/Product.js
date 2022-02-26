import React from 'react';
import './Product.css'
import Rating  from 'react-rating';
const Product = (props) => {
    // console.log(props)
    const {name,img,seller,price,stock,star} = props.product;

    return (
        <div className='product'>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className='product-name'>{name}</h4>
            <p>by: {seller}</p>
            <p>Price: {price}</p>
            <Rating 
                readonly
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"            
            > </Rating>
            <br />
            <button onClick={()=> props.handleAddToCart(props.product)} className='btn-purchase'>add to cart</button>
            </div>    
            
        </div>
    );
};

export default Product;