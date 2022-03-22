import React from 'react';
import './Shop.css'
import { useState, useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products,setProduts]=useState([]);
    const [cart,setCart]=useState([]);
    const [displayProducts,setDisplayProducts] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => {
            setProduts(data)
            setDisplayProducts(data)
        })
    }, [])

    useEffect(()=>{
        if(products.length){
            const savedCart= getStoredCart();
            const storedCart = [];

            for(const key in savedCart ){
                // console.log(savedCart[key])
                const Addedproduct = products.find(product => product.key === key)
                if(Addedproduct){
                    const quantity = savedCart[key]
                    Addedproduct.quantity=quantity;
                    console.log(Addedproduct)
                    storedCart.push(Addedproduct);

                }
            }
            setCart(storedCart)
      }  

    },[products])

    // console.log(products)
    const handleAddToCart = (product) =>{
        const exist = cart.find(pd => pd.key === product.key);
        let newCart =[];
        if (exist){
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest , product]
        }
        else{
            product.quantity = 1;
            newCart = [...cart , product];

        }
        setCart(newCart);
        addToDb(product.key,cart)
    }

    const handleSearch=event=>{
        const searchText = (event.target.value);
         const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
         setDisplayProducts(matchedProduct)
    }

    return (
        <> 
        <div className="search-container">
            <input onChange={handleSearch} className='search-container-input' placeholder='Search Product' type="text" />
        </div>
        <div className='shop-container'>
            <div className="product-container">  
                {
                    displayProducts.map(product => 
                    <Product 
                    key ={product.key}
                    handleAddToCart={handleAddToCart}
                    product={product}>
                    </Product>)
                }
            </div>

            <div className="shop-container">

                <Cart cart={cart}> 
                <Link to="review"> 
                    <button className='btn-purchase'> Review Order</button>
                </Link> </Cart>
               
            </div>

        </div>
        </>
    );
};

export default Shop;