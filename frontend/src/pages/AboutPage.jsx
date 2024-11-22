import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const AboutPage = ()=>{

    return (
        <div>
            <Navbar />
            <div className="about-page">

            </div>
                <div className="inside-about">
                    <h1 style={{marginTop:'50vh'}}>Welcome to Urban Mart</h1>
                    <h2>Your ultimate destination for trendy fashions.</h2>

                    <div style={{width:'60%', textAlign:'center', marginTop:'5vh', fontSize:'1.7vw'}}>
                    We are passionate about bringing high-quality, innovative, and affordable products to your doorstep. Our journey began with a simple idea: to create a shopping experience that combines convenience with a curated selection of products tailored to your needs and preferences.
                    </div>

                    <div style={{width:'60%', textAlign:'left', marginTop:'5vh'}}>
                        <h2 style={{textAlign:'center'}}>Our Mission</h2>
                        <br/>
                        Our mission is to deliver an exceptional shopping experience by offering:

                        <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'2vh', marginTop:'2vh', fontSize:'1.7vw'}}>
                            <li><b>Diverse Selection:</b> A wide range of products handpicked to suit every lifestyle.</li>
                            <li><b>Uncompromised Quality:</b> Partnering with trusted brands to ensure you receive only the best.</li>
                            <li><b>Affordable Pricing:</b> Great value without breaking the bank.</li>
                        </ul>
                    </div>

                    <div style={{width:'60%', textAlign:'left', marginTop:'5vh'}}>
                        <h2 style={{textAlign:'center'}}>Why Choose Us?</h2>
                        <br/>
                        <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:'2vh', marginTop:'2vh', fontSize:'1.7vw'}}>
                            <li><b>Customer-Centric Approach:</b> Your satisfaction is our priority.</li>
                            <li><b>Seamless Shopping:</b> Easy navigation, secure payments, and quick delivery.</li>
                            <li><b>Supportive Team:</b> Always here to help you with any questions or concerns.</li>
                        </ul>
                    </div>

                    <div style={{width:'70%', textAlign:'center', marginTop:'15vh', fontSize:'1.7vw'}}>
                    At Urban Mart, we’re not just building a store; we’re building a community of happy customers who love convenience and quality. Thank you for choosing us as your shopping partner.
                    </div>

                    <div style={{width:'70%', textAlign:'left', marginTop:'5vh', fontSize:'1.7vw'}}>
                        <br/>
                    Happy Shopping! <br/>
                    The Urban Mart Team
                    </div>

                    <div style={{height:'20vh'}}>
.
                    </div>

                </div>
        </div>
    );

};