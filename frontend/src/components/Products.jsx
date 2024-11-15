import { ProductCard } from "./ProductCard";
import { useState } from "react";

export const Products = () => {

    const[products, setProducts] = useState([
        {
            name: 'Nike',
            desc: 'Kids',
            price: 789
        },
        {
            name: 'Nike',
            desc: 'Men',
            price: 789
        },
        {
            name: 'Adidas',
            desc: 'Men',
            price: 670
        },
        {
            name: 'Puma',
            desc: 'Men',
            price: 200
        },
        {
            name: 'Puma',
            desc: 'Men',
            price: 200
        },
        {
            name: 'Puma',
            desc: 'Men',
            price: 200
        },
        {
            name: 'Puma',
            desc: 'Women',
            price: 200
        },
        {
            name: 'Puma',
            desc: 'Kids',
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