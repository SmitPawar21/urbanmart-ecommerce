import { Navbar } from "../components/Navbar";
import { useState } from "react";

export const ProductPage = ()=>{

    const [size, setSize] = useState('S');

    const handleSize = (value) =>{
        setSize(value)
    }

    return (
        <div>
            <Navbar/>

            <div style={{display:'flex', width:'100%', height:'100vh', padding:'15vh 3vw', boxSizing:'border-box', justifyContent:'space-between', alignItems:'center', backgroundColor:'#dfd3c3' }}>
                <img style={{width:'40vw', height:'60vh'}} />
                <div style={{padding:'2vh 5vw', boxSizing:'border-box'}}>
                    <h1> Title of the product </h1>
                    <p>****</p>
                    <h2> Rs. 14,500.00 </h2>
                    <p style={{marginBottom:'2vh'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit mollitia repellat distinctio quam sunt aliquid? Ex adipisci quas ut rerum</p>
                    <h3 style={{marginBottom:'2vh', marginTop:'3vh'}}>Select Size</h3>
                    <ul className="size-list" style={{width:'80%', display:'flex', listStyle:'none', justifyContent:'space-around'}}>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('S')}>S</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('M')}>M</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('L')}>L</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('XL')}>XL</li>
                        <li style={{width:'60px', height:'60px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={() => handleSize('XXL')}>XXL</li>
                    </ul>

                    <div>
                        <h5 style={{marginTop:'2vh'}}> Selected size: {size}</h5>
                    </div>

                    <div>
                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw'}}>Add to Cart</button>

                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw'}}>Save to Watchlist</button>

                        <button class="product-card__btn" style={{marginTop:'5vh', marginRight:'2vw'}}>Back To Shop</button>


                    </div>

                </div>
            </div>
        </div>
    );

}