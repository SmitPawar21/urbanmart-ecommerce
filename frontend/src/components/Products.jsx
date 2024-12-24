import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

export const Products = () => {
    const [products, setProducts] = useState([]);
    const { searchTerm, category } = useAuth();

    const backendurl = "https://urbanmart-ecommerce-zwgk.vercel.app";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${backendurl}/products`);
                const data = await response.json();
                console.log('Fetched products:', data); // Debug log
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Debug log
    useEffect(() => {
        console.log('Current category state:', category);
    }, [category]);

    const getFilteredProducts = () => {
        // If no products yet, return empty array
        if (!products.length) return [];

        // Debug logs
        console.log('Filtering products with:');
        console.log('SearchTerm:', searchTerm);
        console.log('Category:', category);
        
        // If both search term and category filters are active
        if (searchTerm && category?.length) {
            return products.filter(product => {
                const titleMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
                const categoryMatch = (Array.isArray(category) ? category : [category]).some(cat => {
                    console.log('Comparing:', product.gender.toLowerCase(), 'with:', cat.toLowerCase());
                    return product.gender.toLowerCase() === cat.toLowerCase();
                });
                return titleMatch && categoryMatch;
            });
        }
        
        // If only search term is active
        if (searchTerm) {
            return products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // If only category filter is active
        if (category?.length) {
            const filtered = products.filter(product => {
                const categoryArray = Array.isArray(category) ? category : [category];
                const match = categoryArray.some(cat => {
                    console.log('Checking product:', product.gender, 'against category:', cat);
                    return product.gender.toLowerCase() === cat.toLowerCase();
                });
                return match;
            });
            console.log('Category filtered products:', filtered);
            return filtered;
        }
        
        // If no filters are active, return all products
        return products;
    };

    const filteredProducts = getFilteredProducts();

    // Debug log
    console.log('Final filtered products:', filteredProducts);

    return (
        <div className="products-section">
            <div className="card-area">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.prod_id}
                            id={product.prod_id}
                            name={product.title}
                            desc={product.description}
                            price={product.price}
                            star={product.star}
                            img_url={product.image_url}
                        />
                    ))
                ) : (
                    <div>No products found</div>
                )}
            </div>
        </div>
    );
};