import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

export const Products = () => {

    const[products, setProducts] = useState([]);

    const {searchTerm} = useAuth();

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

    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
        <div className="products-section">
            <div className="card-area">
                {
                    (filteredProducts.length > 0) ? (
                        filteredProducts.map((product, index) => (
                            <ProductCard id={product.prod_id} name={product.title} desc={product.description} price = {product.price} star={product.star} img_url={product.image_url}/>
                        ))
                      ) :
                    products.map(product =>{
                        return <ProductCard id={product.prod_id} name={product.title} desc={product.description} price = {product.price} star={product.star} img_url={product.image_url}/>
                    })
                }
            </div>
        </div>
    );
}