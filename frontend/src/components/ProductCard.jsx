import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

export const ProductCard = (props) => {

    const navigate = useNavigate();

    const handleDetails = (id)=>{
        navigate('/product');
    }

    return (
        <div class="product-card">
            <div class="product-card__image">
                <img src={props.img_url} alt="Red Nike Shoes" />
            </div>
            <div class="product-card__info">
                <p>{props.id}</p>
                <h2 class="product-card__title"> {props.name} </h2>

                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1vw'}}>
                    <p class="product-card__description"> {props.desc} </p>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1vw'}}>
                    <span class="product-card__price">$ {props.price}</span>
                    <span class="product-card__price" style={{display:'flex', alignItems:'center'}}>{props.star} <StarIcon sx={{color:'orange'}} /> </span>

                </div>

                <div class="product-card__price-row">
                    <button 
                    style={{backgroundColor:'#a0896f', color:'white', padding:'2vh 2vh', border:'none', outline:'none', borderRadius:'5px', cursor:'pointer'}}
                    onClick={() => handleDetails(props.id)}
                    >
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