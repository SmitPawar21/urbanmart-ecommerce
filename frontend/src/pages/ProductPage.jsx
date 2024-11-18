import { Navbar } from "../components/Navbar";
import { useAuth } from "../components/AuthProvider";
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Footer } from "../components/Footer";

export const ProductPage = ()=>{

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


    return (
        <div>
            <Navbar/>

            <div style={{display:'flex', width:'100%', height:'100vh', padding:'15vh 3vw', boxSizing:'border-box', justifyContent:'space-around', alignItems:'center', backgroundColor:'#dfd3c3' }}>
                <img style={{width:'25vw', height:'60vh'}} src={item.image_url} />
                <div style={{padding:'2vh 5vw', boxSizing:'border-box', width:'60vw', backgroundColor:'#c7b198'}}>
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
                    <ul className="size-list" style={{width:'80%', display:'flex', listStyle:'none', justifyContent:'space-around'}}>
                        <h3 style={{marginBottom:'2vh', marginTop:'3vh'}}>Select Size: </h3>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('S')}>S</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('M')}>M</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('L')}>L</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('XL')}>XL</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('XXL')}>XXL</li>
                    </ul>

                    <div>
                        <h5 style={{marginTop:'2vh'}}> Selected size: {size}</h5>
                    </div>

                    <div style={{display:'flex', alignItems:'center'}}>
                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw', padding:'1vh 1vw', fontSize:'1.2vw'}}>
                            <AddShoppingCartIcon/>
                            Add to Cart
                        </button>

                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw', padding:'1vh 1vw', fontSize:'1.2vw'}}>
                            <BookmarkIcon/>
                            Save to Watchlist
                        </button>

                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw', padding:'1vh 1vw', fontSize:'1.2vw'}}>
                            <ArrowBackIcon/>
                            Back To Shop
                        </button>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );

}