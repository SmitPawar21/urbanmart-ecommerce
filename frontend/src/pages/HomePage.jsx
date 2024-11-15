import {Navbar} from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Products } from "../components/Products";
import { Feature } from "../components/Feature";
import { ScrollingText } from "../components/ScrollingText";
import { Footer } from "../components/Footer";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const HomePage = ()=>{

    return (
        <div style={{backgroundColor:'#dfd3c3'}}>
            <Navbar />
            <Banner />

            <ScrollingText/>

            <h2 style={{marginTop:'5vh', textAlign:'center', backgroundColor:'#f0f0f0', padding:'1vh 0vw'}}>
                <AutoAwesomeIcon sx={{mr:2}} />
                Our Latest Collections
                <AutoAwesomeIcon sx={{ml:2}} />
            </h2>

            <Products />
            {/* <h2 style={{marginTop:'5vh', textAlign:'center'}}>Features</h2> */}
            <Feature/>

            <div className="discount-banner">

            </div>

            <Footer/>
            
        </div>
    );

}