import {Navbar} from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Products } from "../components/Products";
import { Feature } from "../components/Feature";

export const HomePage = ()=>{

    return (
        <div style={{backgroundColor:'#dfd3c3'}}>
            <Navbar />
            <Banner />
            <h2 style={{marginTop:'5vh', textAlign:'center'}}>Latest Collections</h2>
            <Products />
            {/* <h2 style={{marginTop:'5vh', textAlign:'center'}}>Features</h2> */}
            <Feature/>
            
        </div>
    );

}