import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

export const Products = () => {

    const[products, setProducts] = useState([]);

    useEffect(()=>{

        const fetchProducts = async()=>{
            await fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
        };

        fetchProducts();

    }, [])

    return (
        <div className="products-section">
            <div className="card-area">
                {
                    products.map(product =>{
                        return <ProductCard name={product.title} desc={product.description} price = {product.price} star={product.star} img_url={product.image_url}/>
                    })
                }
            </div>
        </div>
    );
}