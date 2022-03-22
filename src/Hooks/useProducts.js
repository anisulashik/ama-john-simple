import { useState, useEffect } from 'react';

const useProducts=()=>{
    const [products,setPrducts] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setPrducts(data))
    },[])
    return [products];

}
export default useProducts;
