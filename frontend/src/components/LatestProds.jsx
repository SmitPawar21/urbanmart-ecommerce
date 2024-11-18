import { ProductCard } from "./ProductCard";
import { useState } from "react";

export const LatestProds = () => {

    const[products, setProducts] = useState([{
        prod_id: 1,
        name:"smit",
        desc:"hello world",
        price:100
    }
    ]);


    // await fetch('http://localhost:5000/products')
    //       .then((res)=>res.json())
    //       .then((data)=>{
    //         console.log(data);
    //         setProducts(data);
    //       })

    return (
        <div className="products-section">
            <div className="card-area">
                {
                    products.map(product =>{
                        return <ProductCard id={product.prod_id} name={product.name} desc={product.desc} price = {product.price} />
                    })
                }
            </div>
        </div>
    );
}