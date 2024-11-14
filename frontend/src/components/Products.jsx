import { ProductCard } from "./ProductCard";
import { useState } from "react";

export const Products = () => {

    const[products, setProducts] = useState([
        {
            name: 'Nike',
            desc: 'ftyuh ytuyibjk nyvh mnfyguivh nmugkbjvh mn',
            price: 789
        },
        {
            name: 'Nike',
            desc: 'ftyuh ytuyibjk nyvh mnfyguivh nmugkbjvh mn',
            price: 789
        },
        {
            name: 'Adidas',
            desc: 'ftyuh ytuyibjk nyvh mnfyguivh nmugkbjvh mn',
            price: 670
        },
        {
            name: 'Puma',
            desc: 'ftyuh ytuyibjk nyvh mnfyguivh nmugkbjvh mn',
            price: 200
        },

    ]);

    return (
        <div className="products-section">
            <div className="card-area">
                {
                    products.map(product =>{
                        return <ProductCard name={product.name} desc={product.desc} price = {product.price} />
                    })
                }
            </div>
        </div>
    );
}