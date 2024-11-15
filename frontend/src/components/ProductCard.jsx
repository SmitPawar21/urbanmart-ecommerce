import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ProductCard = (props) => {

    return (
        <div class="product-card">
            <div class="product-card__image">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Red Nike Shoes" />
            </div>
            <div class="product-card__info">
                <h2 class="product-card__title"> {props.name} </h2>

                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1vw'}}>
                    <p class="product-card__description"> {props.desc} </p>
                    <span class="product-card__price">$ {props.price}</span>
                </div>


                <div class="product-card__price-row">
                    <button style={{backgroundColor:'#a0896f', color:'white', padding:'2vh 2vh', border:'none', outline:'none', borderRadius:'5px', cursor:'pointer'}}>
                        Details
                    </button>

                    <button class="product-card__btn">
                        <AddShoppingCartIcon/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}