import { Navbar } from "../components/Navbar";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
    const navigate = useNavigate();

    const [list, setList] = useState([]);

    const backendurl = "https://urbanmart-ecommerce-zwgk.vercel.app";

    const cookie_se_aya_hua_userId = Cookies.get('user_id');
    console.log("cookie_se_aya_hua_userId: ", cookie_se_aya_hua_userId);

    const fetchCart = async () => {
        await fetch(`${backendurl}/allcartitems`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ user_id: cookie_se_aya_hua_userId })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setList(data.items);
            })
    };

    useEffect(() => {

        fetchCart();

    }, [])

    const handleCheckout = () => {
        navigate('/checkout');
    }
    const handleShop = () => {
        navigate('/collection');
    }
    const handleDelete = async (prodId) => {
        const userId = Cookies.get('user_id');
        await fetch(`${backendurl}/deleteitem`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({user_id: userId, prod_id: prodId})
        })
        .then((res)=>res.json())
        .then((data) => {
            if(data.message === "Successfully deleted"){
                fetchCart();
            } else{
                alert('Problem while deleting')
            }
        });
    }

    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        const newSubTotal = list.reduce((total, item) => total + item.price * item.quantity, 0);
        console.log('subtotal: ', newSubTotal)
        setSubTotal(newSubTotal);
      }, [list]);

    return (
        <div>
            <Navbar />

            <div style={{ width: '100%', minHeight: '100vh', padding: '15vh 3vw', boxSizing: 'border-box', backgroundColor: '#596e79' }}>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ color: 'white' }}>
                            <ShoppingCartIcon sx={{ mr: 2 }} />
                            Shopping Cart
                        </h1>
                        <h4 style={{ marginTop: '2vh', color: 'white' }}> {list.length} items in Your Cart </h4>
                    </div>

                    <div>
                        <button className="cart-page-button" style={{ width: '30vw', height: '10vh' }} onClick={handleShop}> CONTINUE SHOPPING </button>
                    </div>
                </div>


                <ul style={{ listStyle: 'none', width: '95%', minHeight: '50vh', padding: '3vh 3vw', boxSizing: 'border-box', border: '1px solid white', borderRadius: '10px', marginTop: '5vh', boxShadow: '10px 10px 30px #222', marginBottom: '5vh', backgroundColor: '#F9F3EB', display: 'flex', gap: '3vw' }}>
                    <div style={{ width: '60%' }}>
                        {
                            list.map((item, index) => { 

                                return (
                                    <li key={index} style={{ width: '100%', height: '15vh', padding: '', boxSizing: 'border-box', backgroundColor: '#dfd3c3', display: 'flex', alignItems: 'center', marginBottom: '3vh', padding: '0vh 2vw' }}>
                                        <img style={{ width: '10%', height: '90%', marginRight: '4vw' }} src={item.image_url} />

                                        <h3 style={{ width: '40%', marginRight: '4vw' }}> {item.title} </h3>

                                        <h3 style={{ marginRight: '5vw', display: 'flex', width: '5vw' }}> ₹{item.price * item.quantity}.00 </h3>

                                        <p style={{ fontSize: '1.3vw', fontWeight: '600', width:'10%' }}>qty: {item.quantity}</p>

                                        <span style={{ width: '5%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                                        onClick={()=>handleDelete(item.prod_id)}
                                        >
                                            <DeleteIcon sx={{ color: 'red' }} />
                                        </span>
                                    </li>
                                );
                            })
                        }
                    </div>

                    <div style={{ width: '40%' }}>

                        <div style={{border:'1px solid black', padding:'1vh 2vw', marginBottom:'5vh'}}>
                            <h3 style={{textAlign:'center', marginBottom:'3vh'}}>Your Bill looks like</h3>

                            <h5 style={{marginTop:'1vh', fontSize:'1.5vw', fontWeight:'600', display:'flex', width:'100%', justifyContent:'space-between'}}>SubTotal: <p> ₹{subTotal}.00 </p></h5>

                            <h5 style={{marginTop:'1vh',fontSize:'1.5vw', fontWeight:'600',display:'flex', width:'100%', justifyContent:'space-between'}}>Shipping Fee: <p>₹50.00</p> </h5>

                            <h4 style={{marginTop:'3vh',fontSize:'1.5vw', fontWeight:'600',display:'flex', width:'100%', justifyContent:'space-between'}}>Total: <p>₹{subTotal + 50}.00</p> </h4>
                            <p style={{fontSize:'1.2vw', fontWeight:'500'}}>(incl. gst & 20% discount)</p>
                        </div>

                        <button className="cart-page-button" style={{ width: '100%', height: '10vh', padding: '2vh 1vw', textAlign: 'center', marginTop:'5vh' }} onClick={handleCheckout}> PROCEED TO BUY </button>

                    </div>
                </ul>

            </div>
        </div>
    );
}