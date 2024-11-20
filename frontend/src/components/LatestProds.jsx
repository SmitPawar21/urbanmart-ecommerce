import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { useEffect } from "react";

export const LatestProds = () => {

    const[products, setProducts] = useState([]);


    useEffect(()=>{

        const fetchProducts = async()=>{
            await fetch('http://localhost:5000/latestproducts')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
        };

        fetchProducts();

    }, []);

    return (
        <div className="products-section">
            <div className="card-area">
                {
                    products.map(product =>{
                        return <ProductCard id={product.prod_id} name={product.title} desc={product.description} price = {product.price} star={product.star} img_url={product.image_url} style={{width:'25%'}} />
                    })
                }
            </div>
        </div>
    );
}