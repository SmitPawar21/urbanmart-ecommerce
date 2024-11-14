import { Navbar } from "../components/Navbar";
import { useState } from "react";

export const CartPage = () => {

    const [list, setList] = useState([1,2,3]);



    return (
        <div>
            <Navbar />

            <div style={{ width: '100%', minHeight: '100vh', padding: '15vh 3vw', boxSizing: 'border-box', backgroundColor: '#596e79' }}>

                <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <div>
                        <h1 style={{ color: 'white' }}> Shopping Bag </h1>
                        <h4 style={{ marginTop: '2vh', color: 'white' }}> {list.length} items in Your Bag </h4>
                    </div>

                    <div>
                        <button style={{ width: '30vw', height: '10vh' }}> CONTINUE SHOPPING </button>
                    </div>
                </div>


                <ul style={{ listStyle: 'none', width: '95%', minHeight: '50vh', padding: '3vh 3vw', boxSizing: 'border-box', border: '1px solid white', borderRadius: '10px', marginTop: '5vh', boxShadow: '10px 10px 30px #222', marginBottom: '5vh', backgroundColor: '#F9F3EB' }}>
                    {

                        list.map(item => {
                            return (
                                <li style={{ width: '100%', height: '15vh', padding: '', boxSizing: 'border-box', backgroundColor: '#c7b198', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '3vh' }}>
                                    <img style={{ width: '10%', height: '90%' }} />
                                    <h1> Nike - Jordan A345 </h1>
                                    <h3> Rs. 14,500.00 </h3>
                                    <input type="number" placeholder="QTY" style={{ width: '10%', height: '40%', fontSize: '1.5vw', padding: '1vh' }} />
                                    <span style={{ width: '5%', height: '50%', border: '1px solid red' }}>
                                        {/* delete */}
                                    </span>
                                </li>
                            );
                        })
                    }
                </ul>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '45%', padding: '2vh 3vw', border: '1px solid white', marginTop: '5vh', boxSizing: 'border-box', borderRadius: '10px', color: "white" }}>
                        <h3 style={{ marginBottom: '2vh' }}>YOUR TOTAL</h3>
                        <span style={{ marginTop: '2vh', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            Subtotal
                            <p> Rs. 14,500.00 </p>
                        </span>
                        <span style={{ marginTop: '2vh', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            Shipping Fee
                            <p> Rs. 50.00 </p>
                        </span>
                        <span style={{ marginTop: '2vh', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            Grand Total
                            <p> Rs. 14,550.00 </p>
                        </span>
                    </div>

                    <div style={{ width: '45%', padding: '2vh 3vw', marginTop: '5vh', boxSizing: 'border-box', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button style={{ width: '70%', height: '40%' }}> PROCEED TO BUY </button>
                    </div>
                </div>


            </div>
        </div>
    );
}