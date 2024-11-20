import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import Cookies from "js-cookie"

export const ProductCard = (props) => {

    const navigate = useNavigate();

    const {newProdId} = useAuth();

    const handleDetails = (id)=>{
        console.log(id);
        newProdId(id);
        navigate('/product');
    }

    const handleCart = async (prod_id, qty) =>{
        if(!(Cookies.get('user_id'))){
            alert('You have to Register First');
            return;
        }

        await fetch('http://localhost:5000/addtocart',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: Cookies.get('user_id'), 
                prod_id: prod_id,
                quantity: qty 
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.message === "Added to Cart"){
                alert('Item Added to Cart successfully');
                return;
            }
            else if(data.message === "Already there in cart"){
                alert('Item Already there in cart');
                return;
            }
            alert('Item not added. Something went wrong.')
        })
    }

    return (
        <div class="product-card">
            <div class="product-card__image">
                <img src={props.img_url} alt="" />
            </div>
            <div class="product-card__info">
                <h2 class="product-card__title"> {props.name} </h2>

                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1vw'}}>
                    <p class="product-card__description"> {props.desc} </p>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1vw'}}>
                    <span class="product-card__price">₹ {props.price}</span>
                    <span class="product-card__price" style={{display:'flex', alignItems:'center'}}>{props.star} <StarIcon sx={{color:'orange'}} /> </span>

                </div>

                <div class="product-card__price-row">
                    <button 
                    style={{backgroundColor:'#a0896f', color:'white', padding:'2vh 2vh', border:'none', outline:'none', borderRadius:'5px', cursor:'pointer'}}
                    onClick={() => handleDetails(props.id)}
                    >
                        Details
                    </button>

                    <button class="product-card__btn" onClick={() => handleCart(props.id, 1)}>
                        <AddShoppingCartIcon/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}