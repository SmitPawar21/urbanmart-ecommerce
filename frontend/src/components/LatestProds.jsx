import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { useEffect } from "react";

export const LatestProds = () => {

    const[products, setProducts] = useState([]);

    const backendurl = "https://urbanmart-ecommerce-zwgk.vercel.app";


    useEffect(()=>{

        const fetchProducts = async()=>{
            await fetch(`${backendurl}/latestproducts`)
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
            <h1>card card card</h1>
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