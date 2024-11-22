import { Navbar } from "../components/Navbar";
import { useAuth } from "../components/AuthProvider";
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ProductPage = ()=>{
    const navigate = useNavigate();

    const {prodId} = useAuth();

    const [item, setItem] = useState({
        image_url:'',
        title:'',
        description:'',
        price:'',
        star:'',
        gender:''
    });
    const [size, setSize] = useState('S');
    const [qty, setQty] = useState(1);

    useEffect(()=>{
        const fetchDetails = async()=>{
            await fetch('http://localhost:5000/oneproduct',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ p_id: prodId })
            })
            .then((res)=>res.json())
            .then((data)=>{
                setItem(data.item);
            })
        };

        fetchDetails();
    },[]);

    const handleSize = (size) =>{
        setSize(size);
    }

    const handleQty = (e) =>{
        setQty(e.target.value);
    }
    const handleShop = ()=>{
        navigate('/collection');
    }

    const handleCart = async (prod_id) =>{
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
        <div>
            <Navbar/>

            <div style={{display:'flex', width:'100%', height:'100vh', padding:'15vh 3vw', boxSizing:'border-box', justifyContent:'space-around', alignItems:'center', backgroundColor:'#dfd3c3' }}>
                <img style={{width:'25vw', height:'60vh', border:'2px solid black'}} src={item.image_url} />
                <div style={{padding:'2vh 5vw', boxSizing:'border-box', width:'60vw', backgroundColor:'#c7b198', boxShadow:'10px 10px 30px black'}}>
                    <h1> {item.title} </h1>
                    <p style={{display:'flex', alignItems:'center', fontWeight:'400'}}>     
                        {(()=>{
                            const stars = []
                            for(let i=1; i<item.star; i++) {
                                stars.push(<StarIcon sx={{color:'orange'}} />)
                            }
                            return stars;
                        })()} 
                        <StarIcon sx={{color:'orange'}} /> 
                    </p>
                    <p> {item.gender} </p>
                    <h2 style={{marginBottom:'1vh', display:'flex'}}> 
                        ₹ {item.price}.00 
                        <p style={{fontSize:'1vw', fontWeight:'500', marginLeft:'1vw'}}>incl. gst & 20% discount</p>
                    </h2>
                    <p style={{marginBottom:'2vh'}}>{item.description}</p>
                    <ul className="size-list" style={{width:'100%', display:'flex', listStyle:'none', justifyContent:'space-around', alignItems:'center', gap:'1vh'}}>
                        <h4 style={{marginBottom:'2vh', marginTop:'3vh'}}>Size: </h4>
                        <li style={{width:'20%', height:'70%', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('S')}>S</li>
                        <li style={{width:'20%', height:'70%', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('M')}>M</li>
                        <li style={{width:'20%', height:'70%', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('L')}>L</li>
                        <li style={{width:'20%', height:'70%', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('XL')}>XL</li>
                        <li style={{width:'20%', height:'70%', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('XXL')}>XXL</li>

                        <h4 style={{marginBottom:'2vh', marginTop:'3vh', marginLeft:'3vw'}}>Quantity: </h4>
                        <input type="number" style={{width:'10%', height: '70%', fontSize: '1.3vw', padding: '1vh', outline: 'none', border: '2px solid black', borderRadius: '5px', fontWeight:'600', 
                        }}
                        onChange={handleQty} 
                        />
                    </ul>

                    <div>
                        <h5 style={{marginTop:'2vh'}}> Selected size: {size}</h5>
                    </div>

                    <div style={{display:'flex', alignItems:'center'}}>
                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw', padding:'1vh 1vw', fontSize:'1.2vw'}}
                        onClick={() => handleCart(item.prod_id, 1)}
                        >
                            <AddShoppingCartIcon/>
                            Add to Cart
                        </button>

                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw', padding:'1vh 1vw', fontSize:'1.2vw'}}>
                            <BookmarkIcon/>
                            Reviews
                        </button>

                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw', padding:'1vh 1vw', fontSize:'1.2vw'}}
                        onClick={handleShop}
                        >
                            <ArrowBackIcon/>
                            Back To Shop
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );

}